const { response } = require("express");
const { getMean, getMedian } = require("./mathfuncs");
const ExpressError  = require('./expressError')

express = require("express");

const app = express();

app.use(express.json());

app.get("/mean", (req, res, next) => {
  if(! req.query.nums){
    throw new ExpressError('You must pass a query key with a comma seperated list of numbers', 400)
  }
  nums = req.query.nums.split(",").map(Number);
  result = getMean(nums);
  res.json({ operation: "mean", value: `${result}` });
});

app.get("/median", (req, res, next) => {
  if(! req.query.nums){
        throw new ExpressError('You must pass a query key with a comma seperated list of numbers', 400)
    }
  nums = req.query.nums;
  result = getMedian(nums);
  res.json({
    operation: "median",
    value: `${result}`,
  });
});

app.get("/mode", function getMode(req, res) {
    if(! req.query.nums){
        throw new ExpressError('You must pass a query key with a comma seperated list of numbers', 400)
    }
  nums = req.query.nums.split(",");
  result = {};
  for (let num of nums) {
    if (result[num]) {
      result[num]++;
    } else {
      result[num] = 1;
    }
  }
  let max = Object.keys(result).reduce((a, b) => {
    return result[a] > result[b] ? a : b;
  });
  res.json({
    operation: "mode",
    value: `${max}`,
  });
});


app.use(function (req, res, next){
const err = new ExpressError('Not Found', 404);
return next(err)

})


app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;
  
    // set the status and alert the user
    return res.status(status).json({
      error: {message, status}
    });
  });

app.listen(4000, function () {
  console.log("App on port 4000");
});

exports.getMean = this.getMean;
exports.getMedian = this.getMedian;
exports.getMode = this.getMode;
