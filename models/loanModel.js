const mongoose = require('mongoose');

const loanSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'firstName should be provided'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'lastName should be provided'],
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: [true, 'mobile number should be provided'],
  },
  alternativeMobileNumber: {
    type: String,
    required: [true, 'alternative mobile number should be provided'],
  },
  address: {
    type: String,
    required: [true, 'address should be provided'],
    trim: true,
  },
  date: Date,
  amount: {
    type: Number,
    required: [true, 'amount should be provided'],
  },
  notes: String,
  loanID: {
    type: String,
    required: [true, 'loanID should be provided'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  creator: String,
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
