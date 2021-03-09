
const express = require('express');

//controllers:
const whalesController = require('../controllers/whales')

//local router:
const router = express.Router();

//router - static routes:
router.post('/', whalesController.getWhaleSpots);



exports.routes = router;