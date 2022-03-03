const {
    Mean,
    Median,
    Mode,
  } = require("./helpers");
  
  describe("Median", function(){
    test("median of an even set", function(){ 
      expect(Median([1, 2, 3, 4, 5, 6,])).toEqual(3.5)
    })
    
  })
  
  describe("Mean", function () {
    test("finds the mean of an empty array", function () { 
      expect(Mean([])).toEqual(0)
    })
    
  })
  
  describe("Mode", function () {
    test("finds the mode", function () { 
      expect(Mode([2, 3, 4, 4, 5, 6])).toEqual(4)
    })
  })