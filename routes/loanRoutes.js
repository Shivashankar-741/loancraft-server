const express = require('express');
const loanController = require('../controllers/loanController');
const overviewController = require('../controllers/overviewController');

const router = express.Router();

router
  .route('/')
  .get(loanController.getAllLoans)
  .post(loanController.createLoan, overviewController.updateOverview);
router.route('/:id').delete(loanController.deleteLoan, overviewController.deleteOverview);

module.exports = router;
