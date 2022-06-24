const express = require('express');
const router = express.Router();

const servicesController = require('../controllers/servicesController');

router.get('/', servicesController.services);

router.get('/design', servicesController.design);

module.exports = router;
