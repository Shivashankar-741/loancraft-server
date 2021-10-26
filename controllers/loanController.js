const UUID = require('uuid-int');
const Loan = require('./../models/loanModel');
const Overview = require('./../models/overviewModel');

exports.getAllLoans = async (req, res) => {
  try {
    const allLoans = await Loan.find();
    res.status(200).json({
      status: 'success',
      results: allLoans.length,
      data: {
        allLoans,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createLoan = async (req, res, next) => {
  const overview = await Overview.find();

  try {
    const newLoan = await Loan.create({ ...req.body, loanID: `#LID${overview[0].loanID + 1}` });
    req.params.id = newLoan._id;
    next();
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteLoan = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedLoan = await Loan.findByIdAndDelete(id);
    res.status(200).json({
      status: 'success',
      data: {
        deletedLoan,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// exports.deleteLoan = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     await Loan.findByIdAndDelete(id);
//     req.params.id = id;
//     next();
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err.message,
//     });
//   }
// };
