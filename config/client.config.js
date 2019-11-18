const AWS = require('./database.config.js');

var client = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
module.exports = client;