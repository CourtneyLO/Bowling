describe("ScoreBoard", function() {
  var scoreBoard;

  beforeEach(function() {
    scoreBoard = new ScoreBoard();
  });

  it ("initializes with an empty score array", function() {
    expect(scoreBoard.scores).toEqual([])
  });

  it ("returns a the inputted string", function() {
    expect(scoreBoard.score("5")).toEqual("5")
  });

  it ("convert score into a number", function() {
    expect(scoreBoard._convertToNumber("5")).toEqual(5)
  })

  it ("adds amount to scores array", function() {
    scoreBoard.newScore("5")
    expect(scoreBoard.scores).toEqual([5])
  })

  it ("adds a score to scores array", function() {
    scoreBoard.score("5")
    expect(scoreBoard.scores).toEqual([5])
  });







});
