import { App } from 'aws-cdk-lib'
import { PipelineStack } from './PipelineStack'
// import { DeploymentRolesStackSet } from './DeploymentRolesStackSet'
// import { LintingStack } from './LintingStack'



// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
}

// const masterEnv = {
//     account: process.env.CDK_DEFAULT_ACCOUNT,
//     region: process.env.CDK_DEFAULT_REGION,
// }

const app = new App()


// new DeploymentRolesStackSet(app, 'DeploymentRolesStack', { env: masterEnv })

// new LintingStack(app, 'linting-stack', { env: devEnv })
new PipelineStack(app, 'PipelineStack', { env: devEnv })

app.synth()