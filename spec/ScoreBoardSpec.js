describe("ScoreBoard", function() {
  var scoreBoard;

  beforeEach(function() {
    scoreBoard = new ScoreBoard();
  });

  it ("returns a the inputted string", function() {
    expect(scoreBoard.score("5")).toEqual("5")
  });
});
