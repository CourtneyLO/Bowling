describe("Result", function() {
  var result;

  beforeEach(function() {
    result = new Result;
  });

  it ("returns gutter game when no pins are knocked down the whole game", function() {
    expect(result.displayResult(0)).toEqual("Gutter Game")
  });

  it ("returns perfect score when 300 points are scored", function() {
    expect(result.displayResult(300)).toEqual("Perfect Score")
  });

  it ("returns well played when neither perfect score or gutter game is calles", function() {
    expect(result.displayResult(100)).toEqual("Well Played")
  });

});
