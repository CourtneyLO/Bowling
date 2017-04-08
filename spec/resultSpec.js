describe("Result", function() {
  var result;
  var scoreBoard;

  beforeEach(function() {
    result = new Result;
    scoreBoard = new ScoreBoard;
  });

  it ("returns gutter game when no pins are knocked down the whole game", function() {
    expect(result.displayResult(0)).toEqual("Gutter Game")
  });

});
