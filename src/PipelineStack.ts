import { FargateTaskStage } from './Stages/FargateStage';
import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { CodePipeline, CodePipelineSource, ShellStep } from "aws-cdk-lib/pipelines";
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';

export class PipelineStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps = {}) {
        super(scope, id, props);
        const env = props.env

        const pipeline = new CodePipeline(this, "Pipeline", {
            pipelineName: 'IAM-Pipeline',
            synthCodeBuildDefaults: {
                rolePolicy: [
                    new PolicyStatement({
                        effect: Effect.ALLOW,
                        actions: [
                            'ec2:List*',
                            'ec2:Get*'
                        ],
                        resources: ['*']
                    })
                ]
            },
            synth: new ShellStep("Synth", {
                input: CodePipelineSource.connection("Torsitano/iam-pipeline", "main", {
                    connectionArn:
                        "arn:aws:codestar-connections:us-east-1:698852667105:connection/9c887503-78c4-4111-9cb4-6d2b3854016e",
                }),
                commands: ["npm i npm@latest -g", "npm ci", "npm run build", "npx cdk synth"],
            }),
        });


        pipeline.addStage(new FargateTaskStage(this, 'fargateAddStage'))


    }
}
