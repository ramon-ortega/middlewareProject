const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const verificationAdmin = require('../middlewares/adminMiddleware');

router.get('/', mainController.index);

router.get('/admin',  verificationAdmin, mainController.admin);

module.exports = router;
