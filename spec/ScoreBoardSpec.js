describe("ScoreBoard", function() {
  var scoreBoard;
  var scoreCalculator;
  var displayScore;


  beforeEach(function() {
    displayScore = new DisplayScore();
    scoreCalculator = new ScoreCalculator();
    scoreBoard = new ScoreBoard(scoreCalculator, displayScore);
  });

  describe("initializes with:" , function() {
    it ("an empty scores array", function() {
      expect(scoreBoard.scores).toEqual([]);
    });

    it ("a maximum score per role constant of 10", function() {
      expect(scoreBoard.MAXSCOREPERROLL).toEqual(10);
    });

    it ("a minimum score per role constant of 0", function() {
      expect(scoreBoard.MINSCOREPERROLL).toEqual(0);
    });

    it ("a no error message", function() {
      expect(scoreBoard.error).toEqual("no error");
    });
  });


  describe("splits string of:" , function() {
    it ("strikes into array", function() {
      expect(scoreBoard.takeScores("X|X|X|X|X|X|X|X|X|X||XX")).toEqual([10,10,10,10,10,10,10,10,10,10,10,10]);
    });

    it ("0s and 9s into array", function() {
      expect(scoreBoard.takeScores("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||")).toEqual([9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0]);
    });

    it ("spares", function() {
      expect(scoreBoard.takeScores("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5")).toEqual([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]);
    });

    it ("a mixture of scores", function() {
      expect(scoreBoard.takeScores("X|7/|9-|X|-8|8/|-6|X|X|X||81")).toEqual([10,7,3,9,0,10,0,8,8,2,0,6,10,10,10,8,1]);
    });
  });

  describe("returns score of:" , function() {
    it ("300 for a perfect score", function() {
      scoreBoard.takeScores("X|X|X|X|X|X|X|X|X|X||XX");
      expect(scoreBoard.displayTotal()).toEqual('<p>300</p>');
    });

    it ("90 containing 0s and 9s", function() {
      scoreBoard.takeScores("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||");
      expect(scoreBoard.displayTotal()).toEqual('<p>90</p>');
    });

    it ("150 containing spares", function() {
      scoreBoard.takeScores("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5");
      expect(scoreBoard.displayTotal()).toEqual('<p>150</p>');
    });

    it ("167 containing a mixture of scores", function() {
      scoreBoard.takeScores("X|7/|9-|X|-8|8/|-6|X|X|X||81");
      expect(scoreBoard.displayTotal()).toEqual('<p>167</p>');
    });
  });

  describe("returns an error message when:" , function() {
      it ("score is invalid", function() {
      expect(scoreBoard.takeScores("X|X|X|X|X|X|X|")).toEqual("This score is invalid - please try again")
    });
  });
});
