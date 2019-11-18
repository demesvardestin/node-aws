const client = require('../../config/client.config.js');
const product = require('../../app/models/product.model.js');

// GET /products
// Retrieve all products
exports.findAll = (req, res) => {
    let params = {
        TableName: product,
        ProjectionExpression: "#name, ProductCategory, Details",
        ExpressionAttributeNames: {
            "#name": "Name",
        }
    };
    
    console.log("Scanning Products table...");
    
    let products = [];
    let onScan = (err, data) => {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", err);
            
            res.status(500).send(err);
        } else {
            console.log("Scan succeeded!");
            
            data.Items.forEach( product => {
                products.push(product);
                console.log(product);
            });
            
            res.status(200).send(products);
        }
    };
    
    client.scan(params, onScan);
};

// POST /products
// Create a product
exports.create = (req, res) => {
    let name = req.body.ProductName;
    let category = req.body.ProductCategory;
    let details = req.body.ProductDetails;
    
    let params = {
        TableName: product,
        Item: {
            "Name": name,
            "ProductCategory": category,
            "Details": details
        }
    };
    
    client.put(params, (err, data) => {
        if (err) {
            return res.status(500).send({
                Error: err
            });
        }
        
        res.status(201);
    });
};

// GET /products/:productDetails
// Retrieve a product
exports.findOne = (req, res) => {
    let name = this.retrieveProductDetails(req, true)[0];
    let category = this.retrieveProductDetails(req, true)[1];
    
    let params = {
        TableName: product,
        Key:{
            "Name": name,
            "ProductCategory": category
        }
    };
    
    client.get(params, (err, data) => {
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            let error = "Record not found";
            console.error(error);
            return res.status(200).send({ error: error });
        }
        
        if (err) {
            console.error(err);
            res.status(500).send({
                Error: err
            });
        } else {
            console.log(data);
            res.status(200).send(data);
        }
    });
};

// UPDATE /products/:productDetails
// Update a product
exports.update = (req, res) => {
    let name = this.retrieveProductDetails(req, true)[0];
    let category = this.retrieveProductDetails(req, true)[1];
    let newDetails = this.retrieveProductDetails(req, true)[2];
    
    let params = {
        TableName: product,
        Key: {
            "Name": name,
            "ProductCategory": category
        },
        UpdateExpression: "set Details = :D",
        ExpressionAttributeValues:{
            ":D": newDetails.ProductDetails
        },
        ReturnValues: "UPDATED_NEW"
    };
    
    client.update(params, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        
        console.log(data);
        res.send(data);
    });
};

// DELETE /products/:productDetails
// Delete a product
exports.delete = (req, res) => {
    let name = this.retrieveProductDetails(req, true)[0];
    let category = this.retrieveProductDetails(req, true)[1];
    
    var params = {
        TableName: product,
        Key: {
            "Name": name,
            "ProductCategory": category
        }
    };
    
    client.delete(params, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        
        console.log(data);
        res.send(data);
    });
};

exports.retrieveProductDetails = (req, update = false) => {
    let path = req.params.productDetails.split('_');
    let name = path[0].split('-').join(' ');
    let category = path[1].split('-').join(' ');
    
    if (update) {
        return [name, category, req.body];
    }
    
    return [name, category];
};