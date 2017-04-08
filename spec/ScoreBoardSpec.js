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

  it ('initializes with a last roll of 0', function() {
    expect(scoreBoard.currentFrame).toEqual([]);
  });

  it ('initializes with a max score constant', function() {
    expect(scoreBoard.MAXSCORE).toEqual(10);
  });

  it ('initializes with a mimum score constant', function() {
    expect(scoreBoard.MINSCORE).toEqual(0);
  });

  it ('initializes with a set turns per frame of 2', function() {
    expect(scoreBoard.TURNSPERFRAME).toEqual(2);
  });
  it ("returns a the inputted string for the first roll of the set", function() {
    expect(scoreBoard.firstRoll("5")).toEqual("5");
  });

  it ("returns a the inputted string for the second roll of the set", function() {
    expect(scoreBoard.secondRoll("3")).toEqual("3");
  });

  it ("convert score into a number", function() {
    expect(scoreBoard._convertToNumber("5")).toEqual(5);
  })

  it ("adds first roll to scores array", function() {
    scoreBoard.firstRoll("5");
    expect(scoreBoard.scores).toEqual([5]);
  })

  it ("adds second roll to scores array", function() {
    scoreBoard.firstRoll("5");
    scoreBoard.secondRoll("3")
    expect(scoreBoard.scores).toEqual([5, 3]);
  });

  it ("adds a score to scores array", function() {
    scoreBoard.firstRoll("5");
    expect(scoreBoard.scores).toEqual([5]);
  });

  it ("calculates the score", function() {
    scoreBoard.scores = [2,3,4,2,5,2,5,1,8,1,3,3,2,3,4,3,6,1,7,2];
    scoreBoard.calculateScore(scoreBoard.scores);
    expect(scoreBoard.result).toEqual(67);
  });

  it ("returns 'X' for a strike", function() {
    expect(scoreBoard.firstRoll("10")).toEqual("X");
  });

  it ("returns '-' for a miss", function() {
    expect(scoreBoard.firstRoll("0")).toEqual("-")
  });

  it ("returns '/' for a spare", function() {
    scoreBoard.firstRoll("2");
    expect(scoreBoard.secondRoll("8")).toEqual("/");
  });

  it ("adds first score to current frame", function() {
    scoreBoard.firstRoll("2");
    expect(scoreBoard.currentFrame).toEqual([2]);
  });

  it ("adds second score to current frame", function() {
    scoreBoard.firstRoll("2");
    scoreBoard.secondRoll("3");
    expect(scoreBoard.currentFrame).toEqual([2, 3]);
  });

  it ("has a currentFrame of only two scores", function() {
    scoreBoard.firstRoll("2");
    scoreBoard.secondRoll("3");
    scoreBoard.firstRoll("4");
    scoreBoard.secondRoll("5");
    expect(scoreBoard.currentFrame).toEqual([4, 5]);
  });

  it ("it adds 0 for second roll if strike is scored", function() {
    scoreBoard.firstRoll("10");
    expect(scoreBoard.currentFrame).toEqual([10, 0]);
  });













});
