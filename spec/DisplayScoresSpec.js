'use-strict';

describe("DisplayScore", function() {
  var displayScores;

  beforeEach(function() {
    displayScore = new DisplayScore();
  });

  describe("displays a total score of:", function() {
    it ("300 for a perfect score", function() {
      var totalScore = 300
      expect(displayScore.total(totalScore)).toEqual('<p>300</p>')
    });

    it ("0 for a gutter game", function() {
      var totalScore = 0
      expect(displayScore.total(totalScore)).toEqual('<p>0</p>')
    });
  });
});
