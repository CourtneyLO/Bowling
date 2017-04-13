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
                                               '/': 10,
                                               '-': 0})
    });
  });

    describe("splits string of:" , function() {
      it ("strikes into array", function() {
        expect(scoreBoard.splitScores("X|X|X|X|X|X|X|X|X|X||XX")).toEqual([10,10,10,10,10,10,10,10,10,10,10,10]);
      });
    });
});
