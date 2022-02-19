import { Stage, StageProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { FargateStack } from '../ecs/FargateStack'

export class FargateTaskStage extends Stage {
    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props)
        const env = props?.env
        new FargateStack(this, 'fargateStack', {
            env
        } )
    }
}