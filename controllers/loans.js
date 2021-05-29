import mongoose from 'mongoose';
import LoanDetails from '../models/loanDetails.js';

export const getLoans = async (req, res) => {
  try {
    const loanDetails = await LoanDetails.find();
    console.log(loanDetails);
    res.status(200).json(loanDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createLoan = async (req, res) => {
  const loan = req.body;
  const newLoanDetails = new LoanDetails(loan);

  try {
    await newLoanDetails.save();
    console.log(newLoanDetails);
    res.status(201).json(newLoanDetails);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
