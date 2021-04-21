const express = require('express');
const router = express.Router();
const Controller = require('../Controllers/Customer');

router
    .route('/')
    .get(Controller.getCustomers);

router
    .route('/:id')
    .get(Controller.getCustomer);

module.exports = router;