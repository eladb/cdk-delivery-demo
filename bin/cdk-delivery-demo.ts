#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { CdkDeliveryDemoStack } from '../lib/cdk-delivery-demo-stack';
import { ApplicationPipelineStack } from '../lib/app-delivery/application-pipeline';
import { DeployStackAction } from '../lib/app-delivery/deploy-stack-action';

const app = new cdk.App();

const actions = new Array<DeployStackAction>();

for (let i = 0; i < 5; ++i) {
  actions.push(new DeployStackAction({
    stack: new CdkDeliveryDemoStack(app, `CdkDeliveryDemoStack-${i}`),
    admin: true,
    runOrder: i
  }));
}

new ApplicationPipelineStack(app, 'cdk-delivery-demo-application-pipeline', {
  bootstrap: 'cdk-delivery-demo',
  stages: [
    { name: 'Deploy', actions }
  ]
});


app.run();
