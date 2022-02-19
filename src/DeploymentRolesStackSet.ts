import { Stack, StackProps, CfnStackSet } from 'aws-cdk-lib';
import { Construct } from 'constructs';


const autoDeploymentProperty: CfnStackSet.AutoDeploymentProperty = {
    enabled: true,
    retainStacksOnAccountRemoval: false
}



export class DeploymentRolesStackSet extends Stack {
    constructor(scope: Construct, id: string, props: StackProps = {}) {
        super(scope, id, props);

        new CfnStackSet(this, 'DeploymentRolesStackSet', {
            stackSetName: 'IAMDeploymentRoles',
            permissionModel: 'SERVICE_MANAGED',
            autoDeployment: autoDeploymentProperty

        })

    }
}