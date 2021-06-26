const express = require('express');
const overviewController = require('../controllers/overviewController');

const router = express.Router();

router.route('/').get(overviewController.getAllOverview).post(overviewController.createOverview);

router.route('/:id').patch(overviewController.updateOverview);
module.exports = router;
