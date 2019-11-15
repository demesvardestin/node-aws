module.exports = (app) => {
    const applicationController = require('../app/controllers/application.controller.js');
    
    // Create a new address
    app.post('/new_product', applicationController.create);
    app.get('/product/:productDetails', applicationController.findOne);
};