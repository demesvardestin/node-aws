module.exports = (app) => {
    const applicationController = require('../app/controllers/application.controller.js');
    
    // Retrieve all products
    app.get('/products', applicationController.findAll);
    
    // Retrieve one product
    app.get('/products/:productDetails', applicationController.findOne);
    
    // Create a new product
    app.post('/new_product', applicationController.create);
    
    // Update an existing product
    app.post('/products/:productDetails', applicationController.update);
};