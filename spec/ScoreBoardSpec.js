describe("ScoreBoard", function() {
  var scoreBoard;
  var frames;
  var displayScores;
  var scoreCalculator;

  beforeEach(function() {
    scoreBoard = new ScoreBoard(frames, displayScores, scoreCalculator);
    frames = new Frames();
    // spyOn(frames, "increaseCount" );
    displayScores = new DisplayScores();
    // spyOn(displayScores, "score" );
    scoreCalculator = new ScoreCalculator();
  });

  it ("initializes with an empty score array", function() {
    expect(scoreBoard.scores).toEqual([]);
  });

  it ('initializes with a max roll number of 20 - without bonus roll', function() {
    expect(scoreBoard.MAXROLLS).toEqual(20);
  });

  it ('initializes with a bonus ball constant of one', function() {
    expect(scoreBoard.BONUSBALL).toEqual(1);
  });

  it ("convert score into a number", function() {
    expect(scoreBoard._convertToNumber("5")).toEqual(5);
  })

  it ("adds first score to score array", function() {
    scoreBoard.firstRoll("2");
    expect(scoreBoard.scores).toEqual([2]);
  });

  it ("adds second roll to scores array", function() {
    scoreBoard.firstRoll("5");
    scoreBoard.firstRoll("3")
    expect(scoreBoard.scores).toEqual([5, 3]);
  });


  it ("has a score array of four scores", function() {
    scoreBoard.firstRoll("2");
    scoreBoard.firstRoll("3");
    scoreBoard.firstRoll("4");
    scoreBoard.firstRoll("5");
    expect(scoreBoard.scores).toEqual([2, 3, 4, 5]);
  });

  it ("adds a strike to the scores array", function() {
    scoreBoard.firstRoll("10");
    expect(scoreBoard.scores).toEqual([10]);
  });

  it ("returns a two element array for 9 frames and a three element array for strike", function() {
    var i = 0;
       do {
          scoreBoard.firstRoll("10");
         i++;
       }
       while (i <= 11);
    expect(scoreBoard.scores).toEqual([10,10,10,10,10,10,10,10,10,10,10,10])
  });

  it ("returns a two element array for 10 frames - no bonus ball allowed", function() {
    var i = 0;
       do {
         scoreBoard.firstRoll("1");
         i++;
       }
       while (i <= 17);
    scoreBoard.firstRoll("1");
    scoreBoard.firstRoll("1");
    expect(scoreBoard.scores).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  });

  it ("returns a two element array for 9 frames and a three element array for spare", function() {
    var i = 0;
       do {
         scoreBoard.firstRoll("1");
         i++;
       }
       while (i <= 17);
    scoreBoard.firstRoll("7");
    scoreBoard.firstRoll("3");
    scoreBoard.firstRoll("1");
    expect(scoreBoard.scores).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 3, 1]);
  });

  it ("returns a two element array for 9 frames and a three element array for strike", function() {
    var i = 0;
       do {
         scoreBoard.firstRoll("1");
         i++;
       }
       while (i <= 17);
    scoreBoard.firstRoll("10");
    scoreBoard.firstRoll("3");
    scoreBoard.firstRoll("1");
    expect(scoreBoard.scores).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 3, 1]);
  });

  it ("returns an error that the scoreboard is full after 10 frames have been bowled", function() {
    var i = 0;
       do {
         scoreBoard.firstRoll("1");
         i++;
       }
       while (i <= 19);
    expect( function(){ scoreBoard.firstRoll("7") } ).toThrow(new Error("Game is over, please start a new game"))
  });

  it ("throws an error when game is over - no more throws allowed", function() {
    var i = 0;
       do {
         scoreBoard.firstRoll("1");
         i++;
       }
       while (i <= 17);
    scoreBoard.firstRoll("7");
    scoreBoard.firstRoll("3");
    scoreBoard.firstRoll("1");
    expect( function(){ scoreBoard.firstRoll("7") } ).toThrow(new Error("Game is over, please start a new game"))
  });

  it ("gives an option to start a new game", function() {
    scoreBoard.firstRoll("7");
    scoreBoard.firstRoll("3");
    expect(scoreBoard.startNewGame().scores).toEqual([]);
  });

  it ("calls score calculator and returns the total score of 29", function() {
    var i = 0;
       do {
         scoreBoard.firstRoll("1");
         i++;
       }
       while (i <= 17);
    scoreBoard.firstRoll("7");
    scoreBoard.firstRoll("3");
    scoreBoard.firstRoll("1");
    expect(scoreBoard.getTotalScore()).toEqual(29)
  });

});
