const AWS = require("aws-sdk");

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  endpoint: new AWS.Endpoint("https://dynamodb.us-east-1.amazonaws.com"),
});

module.exports = AWS;