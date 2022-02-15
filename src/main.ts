import { App } from 'aws-cdk-lib';
import { PipelineStack } from './PipelineStack';
// import { LintingStack } from './LintingStack'



// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

// new LintingStack(app, 'linting-stack', { env: devEnv });
new PipelineStack(app, 'PipelineStack', { env: devEnv });

app.synth();