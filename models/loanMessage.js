import mongoose from 'mongoose';

const loanSchema = {
  firstName: String,
  lastName: String,
  date: {
    type: Date,
    default: new Date(),
  },
  mobileNumber: Number,
  alternativeMobileNumber: Number,
  address: String,
  amount: String,
  notes: String,
};

const loanMessage = mongoose.model('loanMessage', loanSchema);

export default loanMessage;
