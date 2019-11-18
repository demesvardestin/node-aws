const AWS = require('./database.config.js');

const dynamodb = new AWS.DynamoDB({region: "us-east-1"});
module.exports = dynamodb;