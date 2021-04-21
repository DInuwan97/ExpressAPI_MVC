const express = require('express');
const router = express.Router();
const Controller = require('../Controllers/AssignToDo');

router
    .route('/')
    .get(Controller.getAssignToDos);

router
    .route('/:id')
    .get(Controller.getAssignToDo);

module.exports = router;