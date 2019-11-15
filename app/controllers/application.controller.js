const client = require('../../config/client.config.js');
const product = require('../../app/models/product.model.js');

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
            "info": {
                "details": details
            }
        }
    };
    
    client.put(params, (err, data) => {
        if (err) {
            res.status(500).send({
                Error: err
            });
        } else {
            res.render('show', { product: data });
            // res.send(data);
        }
    });
};

exports.findOne = (req, res) => {
    let name = req.params.productDetails.split('_')[0].split('-').join(' ');
    let category = req.params.productDetails.split('_')[1].split('-').join(' ');
    
    let params = {
        TableName: product,
        Key:{
            "Name": name,
            "ProductCategory": category
        }
    };
    
    client.get(params, (err, data) => {
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            return res.status(200).send({ error: "record not found" });
        }
        
        if (err) {
            res.status(500).send({
                Error: err
            });
        } else {
            res.status(200).send(data);
        }
    });
};