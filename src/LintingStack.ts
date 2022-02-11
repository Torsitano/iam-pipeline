import { Stack, StackProps } from 'aws-cdk-lib';
import { RestApi } from 'aws-cdk-lib/aws-apigateway'
import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';


export class LintingStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps = {}) {
        super(scope, id, props);


        // Setup linting Lambda
        const linterLambda = new NodejsFunction(this, 'linterLambda', {
            entry: `${__dirname}/lambda/Linter.ts`,
            handler: 'handler'
        })

        // API Integration
        const lintingApi = new RestApi(this, 'LintingLambda' )
        const lintingApiResource = lintingApi.root.addResource('linting')
        const linterLambdaIntegration = new LambdaIntegration(linterLambda)
        
        lintingApiResource.addMethod('POST', linterLambdaIntegration)

        
    }
  }