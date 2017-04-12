'use-strict';

describe("DisplayScore", function() {
  var displayScores;

  beforeEach(function() {
    displayScores = new DisplayScores();
  });

  it ("returns a value of 300 for a perfect score", function() {
    var totalScore = 300
    expect(displayScores.total(totalScore)).toEqual('<p>300</p>')
  });

  it ("returns a score of 90", function() {
    var totalScore = 90
    expect(displayScores.total(totalScore)).toEqual('<p>90</p>')
  });

});
