import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { PipelineStack } from '../src/PipelineStack';

test('Snapshot', () => {
  const app = new App();
  const stack = new PipelineStack(app, 'test', {
      env: {
        account: '698852667105',
        region: 'us-east-1',
      }
  });

  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});