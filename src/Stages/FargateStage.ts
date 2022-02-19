import { Stage, StageProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { FargateStack } from '../ecs/FargateStack'

export class FargateTaskStage extends Stage {
    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props)

        new FargateStack(this, 'fargateStack', {
            env: {
                account: '698852667105',
                region: 'us-east-1'
            }
        })
    }
}