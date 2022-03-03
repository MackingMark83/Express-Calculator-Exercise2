const express = require("express")

const app = express();

const ExpressError = require('./expressError')

const { convertAndValidateNumsArray, Mode, Mean, Median } = require('./formula');

app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
      throw new ExpressError(' Pass a query key.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
  
  
    let result = {
      operation: "mean",
      result: Mean(nums)
    }
  
    return res.send(result);
  });
  
  app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
      throw new ExpressError(' Pass a query key.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
  
    let result = {
      operation: "median",
      result: Median(nums)
    }
  
    return res.send(result);
    
  });
  
  app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
      throw new ExpressError(' Pass a query key.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
  
    let result = {
      operation: "mode",
      result: Mode(nums)
    }
  
    return res.send(result);
  
});

app.use(function (req, res, next) {
 const err = new ExpressError("Not Found",404);
 return next(err);
});


app.use(function (err, req, res, next) {
    let status = err.status || 500;
    return res.status(status).json({
        error: { 
            message: err.message,
            status: status
    }
});
});


app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
});
  