const dynamodb = require('../../config/dynamo.config.js');
const TableName = 'Products';

const params = {
    TableName : TableName,
    KeySchema: [       
        { AttributeName: "Name", KeyType: "HASH"},
        { AttributeName: "ProductCategory", KeyType: "RANGE" }
    ],
    AttributeDefinitions: [       
        { AttributeName: "Name", AttributeType: "S" },
        { AttributeName: "ProductCategory", AttributeType: "S" },
        { AttributeName: "Details", AttributeType: "S"}
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 10, 
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, (err, data) => {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});

module.exports = TableName;