const AWS = require('./database.config.js');

const client = new AWS.DynamoDB.DocumentClient();
module.exports = client;