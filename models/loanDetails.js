import mongoose from 'mongoose';

const loanSchema = {
  firstName: String,
  lastName: String,
  date: {
    type: Date,
    default: new Date(),
  },
  mobileNumber: String,
  alternativeMobileNumber: String,
  address: String,
  amount: Number,
  notes: String,
};

const LoanDetails = mongoose.model('loanDetails', loanSchema);

export default LoanDetails;
