#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { CdkDeliveryDemoStack } from '../lib/cdk-delivery-demo-stack';

const app = new cdk.App();
new CdkDeliveryDemoStack(app, 'CdkDeliveryDemoStack');
app.run();
