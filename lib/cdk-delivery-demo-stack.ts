import cdk = require('@aws-cdk/cdk');
import sns = require('@aws-cdk/aws-sns');

export class CdkDeliveryDemoStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new sns.Topic(this, 'MyTopic');
  }
}
