const AWS = require('./database.config.js');

var client = new AWS.DynamoDB.DocumentClient();
module.exports = client;