describe("ScoreBoard", function() {
  var scoreBoard;
  var scoreCalculator;
  var displayScore;


  beforeEach(function() {
    scoreBoard = new ScoreBoard();
  });

  describe("initializes with:" , function() {

    it("a constant of possible score results", function() {
      expect(scoreBoard.SCORESYMBOLS).toEqual([{'X': 10,
                                                '/': 10,
                                                '-': 0}])
    });
  });

});
