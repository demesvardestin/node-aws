const AWS = require("aws-sdk");

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:2f30ad67-2357-4e6b-a63f-e50b0239bae4',
  RoleArn: "arn:aws:iam::645836090925:role/Cognito_nodeawsUnauth_Role"
}, {
  region: "us-east-1"
});

AWS.config.update({
  region: 'us-east-1',
  endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});

module.exports = AWS;