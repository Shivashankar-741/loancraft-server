const mongoose = require('mongoose');

const overviewSchema = mongoose.Schema({
  progressLoans: Number,
  closedLoans: Number,
  loansGiven: Number,
  pendingInterest: Number,
  loanAmount: Number,
  loanID: Number,
  loans: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Loan',
    },
  ],
});

const Overview = mongoose.model('Overview', overviewSchema);

module.exports = Overview;
