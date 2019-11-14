module.exports = (app) => {
    const applicationController = require('../app/controllers/application.controller.js');
    
    // Create a new address
    app.post('/products', applicationController.create);
    app.get('/product/:productDetails', applicationController.findOne);
};