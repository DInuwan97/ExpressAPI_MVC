const express = require('express');
const router = express.Router();
const Controller = require('../Controllers/Availability');

router
    .route('/')
    .get(Controller.getAvailabilities);

router
    .route('/:id')
    .get(Controller.getAvailability);

module.exports = router;