import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Cluster, Compatibility, FargateService, LogDriver, NetworkMode, RepositoryImage, TaskDefinition } from 'aws-cdk-lib/aws-ecs'
import { Peer, Port, SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2'
import { Effect, Policy, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam'
import { Repository } from "aws-cdk-lib/aws-ecr";
import { DockerImageAsset } from "aws-cdk-lib/aws-ecr-assets";
import * as path from 'path'
import { DockerImageName, ECRDeployment } from 'cdk-ecr-deployment'

export class FargateStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps){
        super(scope, id, props)

        

        const vpc = Vpc.fromLookup(this, 'MyVPC', {
            vpcId: 'vpc-0c092c3e6353dddfe',
            isDefault: false
        })

        const fargateSg = new SecurityGroup(this, 'fargate-sg', {
            vpc,
            allowAllOutbound: true,
            securityGroupName: 'fargate-sg',  
        })

        fargateSg.addIngressRule(
            //Peer.ipv4('136.56.58.162/32'),
            Peer.anyIpv4(),
            Port.allTraffic(),
            'Allow all traffic from home'            
            )


        const cluster = new Cluster(this, 'IAM-Cluster', {
            clusterName: 'IAM-Cluster',
            vpc
        })

        
        // const repository = Repository.fromRepositoryName(this, 'my-repo', 'my-repo')

        const repository = new Repository(this, 'iam-pipeline-repo', {
            repositoryName: 'iam-pipeline-repo'
        })

        const dockerImage = new DockerImageAsset(this, 'IamPipelineImage', {
            directory: path.join(__dirname, '../Docker')
        })

        
        new ECRDeployment(this, 'PublishDockerImage', {
            src: new DockerImageName(dockerImage.imageUri),
            dest: new DockerImageName(repository.repositoryUri)
        })

        const taskRole = new Role(this, 'task-role', {
            assumedBy: new ServicePrincipal('ecs-tasks.amazonaws.com'),
            roleName: 'task-role',
            description: 'Role for task definition'
        })

        taskRole.attachInlinePolicy(
            new Policy(this, 'task-policy', {
                statements: [
                    new PolicyStatement({
                        effect: Effect.ALLOW,
                        actions: [
                            'iam:*',
                            'organizations:*',
                            'account:*',
                            'logs:*',
                            'cloudwatch:*'
                        ],
                        resources: ['*']
                    })
                ]
            })
        )


        const taskDefinition = new TaskDefinition(this, 'task', {
            family: 'task',
            compatibility: Compatibility.EC2_AND_FARGATE,
            cpu: '256',
            memoryMiB: '512',
            networkMode: NetworkMode.AWS_VPC,
            taskRole: taskRole
        }
        )

        taskDefinition.addContainer('container', {
            image: RepositoryImage.fromEcrRepository(repository, "latest"),
            memoryLimitMiB: 512,
            portMappings: [{
                containerPort: 80
            } ],
            logging: LogDriver.awsLogs({
                streamPrefix: 'ecs-test-logs'
            })
        })

        const fargateService = new FargateService(this, 'service', {
            cluster,
            desiredCount: 0,
            taskDefinition,
            securityGroups: [
                fargateSg
            ],
            assignPublicIp: true
        })

        const scalableTarget = fargateService.autoScaleTaskCount({
            minCapacity: 0,
            maxCapacity: 2
        })

        scalableTarget.scaleOnCpuUtilization('ScaleUpCpu', {
            targetUtilizationPercent: 75
        })


    }
}