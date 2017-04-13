describe("ScoreBoard", function() {
  var scoreBoard;
  var scoreCalculator;
  var displayScore;


  beforeEach(function() {
    scoreBoard = new ScoreBoard();
  });

  describe("initializes with:" , function() {

    it ("an empty scores array", function() {
      expect(scoreBoard.scores).toEqual([]);
    });

    it("a constant of possible score results", function() {
      expect(scoreBoard.SCORESYMBOLS).toEqual({'X': 10,
                                               '-': 0})
    });
  });

    describe("splits string of:" , function() {
      it ("strikes into array", function() {
        expect(scoreBoard.splitScores("X|X|X|X|X|X|X|X|X|X||XX")).toEqual([10,10,10,10,10,10,10,10,10,10,10,10]);
      });

      it ("0s and 9s into array", function() {
        expect(scoreBoard.splitScores("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||")).toEqual([9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0]);
      });

      it ("spares", function() {
        expect(scoreBoard.splitScores("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5")).toEqual([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]);
      });

      it ("a mixture of scores", function() {
        expect(scoreBoard.splitScores("X|7/|9-|X|-8|8/|-6|X|X|X||81")).toEqual([10,7,3,9,0,10,0,8,8,2,0,6,10,10,10,8,1]);
      });
    });
});
