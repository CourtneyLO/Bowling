'use-strict';

describe("DisplayScore", function() {
  var displayScores;

  beforeEach(function() {
    displayScore = new DisplayScore();
  });

  it ("returns a value of 300 for a perfect score", function() {
    var totalScore = 300
    expect(displayScore.total(totalScore)).toEqual('<p>300</p>')
  });

  it ("returns a score of 90", function() {
    var totalScore = 90
    expect(displayScore.total(totalScore)).toEqual('<p>90</p>')
  });

});
