const express = require('express');

//controllers:
const mainController = require('../controllers/main')

//local router:
const router = express.Router();

router.get('/', mainController.getIndex);
router.get('/info', mainController.getInfo);


exports.routes = router;

