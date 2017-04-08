describe("ScoreBoard", function() {
  var scoreBoard;

  beforeEach(function() {
    scoreBoard = new ScoreBoard();
  });

  it ("initializes with an empty score array", function() {
    expect(scoreBoard.scores).toEqual([]);
  });

  it ('initializes with a result of 0', function() {
    expect(scoreBoard.result).toEqual(0);
  });

  it ("returns a the inputted string", function() {
    expect(scoreBoard.score("5")).toEqual("5");
  });

  it ("convert score into a number", function() {
    expect(scoreBoard._convertToNumber("5")).toEqual(5);
  })

  it ("adds amount to scores array", function() {
    scoreBoard.newScore("5");
    expect(scoreBoard.scores).toEqual([5]);
  })

  it ("adds a score to scores array", function() {
    scoreBoard.score("5");
    expect(scoreBoard.scores).toEqual([5]);
  });

  it ("calculates the score", function() {
    scoreBoard.scores = [2,3,4,2,5,2,5,1,8,1,3,3,2,3,4,3,6,1,7,2];
    scoreBoard.calculateScore(scoreBoard.scores);
    expect(scoreBoard.result).toEqual(67);
  });








});
