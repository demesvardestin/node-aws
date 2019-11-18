const AWS = require('./database.config.js');

const dynamodb = new AWS.DynamoDB();
module.exports = dynamodb;