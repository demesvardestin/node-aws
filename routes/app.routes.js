module.exports = (app) => {
    const applicationController = require('../app/controllers/product.controller.js');
    
    // Retrieve all products
    app.get('/products', applicationController.findAll);
    
    // Retrieve one product
    app.get('/products/:productDetails', applicationController.findOne);
    
    // Create a new product
    app.post('/products', applicationController.create);
    
    // Update an existing product
    app.post('/products/:productDetails', applicationController.update);
    
    // Delete a product
    app.delete('/products/:productDetails', applicationController.delete);
};