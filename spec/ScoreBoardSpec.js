describe("ScoreBoard", function() {
  var scoreBoard;
  var scoreCalculator;
  var displayScore;
});

  beforeEach(function() {
    displayScore = new DisplayScore();
    scoreCalculator = new ScoreCalculator();
    scoreBoard = new ScoreBoard(scoreCalculator, displayScore);
  });

  it ("initializes with an empty scores array", function() {
    expect(scoreBoard.scores).toEqual([]);
  });

  it ("initializes with a maximum score per role constant of 10", function() {
    expect(scoreBoard.MAXSCOREPERROLL).toEqual(10);
  });

  it ("initializes with a minimum score per role constant of 0", function() {
    expect(scoreBoard.MINSCOREPERROLL).toEqual(0);
  });

  it ("splits string of strikes into array", function() {
    expect(scoreBoard.splitScores("X|X|X|X|X|X|X|X|X|X||XX")).toEqual([10,10,10,10,10,10,10,10,10,10,10,10]);
  });

  it ("splits string of 0s and 9s into array", function() {
    expect(scoreBoard.splitScores("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||")).toEqual([9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0]);
  });

  it ("splints string with spares", function() {
    expect(scoreBoard.splitScores("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5")).toEqual([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]);
  });

  it ("splints string with a mixture of scores", function() {
    expect(scoreBoard.splitScores("X|7/|9-|X|-8|8/|-6|X|X|X||81")).toEqual([10,7,3,9,0,10,0,8,8,2,0,6,10,10,10,8,1]);
  });

  it ("returns a value of 300 for a perfect score", function() {
    scoreBoard.splitScores("X|X|X|X|X|X|X|X|X|X||XX")
    expect(scoreBoard.displayResult()).toEqual('<p>300</p>')
  });

  it ("returns a score of 90", function() {
    scoreBoard.splitScores("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||")
    expect(scoreBoard.displayResult()).toEqual('<p>90</p>')
  });

  it ("retuns a score of 150", function() {
    scoreBoard.splitScores("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5")
    expect(scoreBoard.displayResult()).toEqual('<p>150</p>')
  });

  it ("retuns a score of 167", function() {
    scoreBoard.splitScores("X|7/|9-|X|-8|8/|-6|X|X|X||81")
    expect(scoreBoard.displayResult()).toEqual('<p>167</p>')
  });
