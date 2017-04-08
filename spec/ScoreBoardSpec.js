describe("ScoreBoard", function() {
  var scoreBoard;

  beforeEach(function() {
    scoreBoard = new ScoreBoard();
  });

  it ("returns a the inputted string", function() {
    expect(scoreBoard.score("5")).toEqual("5")
  });

  it ("convert score into a number", function() {
    expect(scoreBoard._convert("5")).toEqual(5)
})

});
