const Overview = require('./../models/overviewModel');

exports.getAllOverview = async (req, res) => {
  try {
    const allOverview = await Overview.find().populate({ path: 'loans' });
    res.status(200).json({
      status: 'success',
      data: {
        allOverview: allOverview,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
exports.createOverview = async (req, res) => {
  try {
    const createOverview = await Overview.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        createOverview: createOverview,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateOverview = async (req, res) => {
  try {
    const { id } = req.params;
    const overview = await Overview.find();
    console.log(overview[0]);
    const updateOverview = await Overview.findByIdAndUpdate(
      overview[0]._id,
      {
        progressLoans: overview[0].progressLoans + 1,
        loansGiven: overview[0].loansGiven + 1,
        loanID: overview[0].loanID + 1,
        loans: [...overview[0].loans, id],
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      status: 'success',
      data: {
        status: 'success',
        updateOverview: updateOverview,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteOverview = async (req, res) => {
  try {
    const { id } = req.params;
    const overview = await Overview.find();
    const deleteOverview = await Overview.findByIdAndUpdate(
      overview[0]._id,
      {
        progressLoans: overview[0].progressLoans - 1,
        closedLoans: overview[0].closedLoans + 1,
        loans: overview[0].loans.filter((loanId) => loanId !== id),
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      status: 'success',
      data: {
        status: 'success',
        deleteOverview: deleteOverview,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
