const AWS = require("aws-sdk");

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIAJ6H2DU2PYUHBJ5LA',
  secretAccessKey: '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',
  endpoint: new AWS.Endpoint("https://dynamodb.us-east-1.amazonaws.com"),
});

module.exports = AWS;