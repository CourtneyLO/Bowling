'use-strict'

describe('ScoreCalculator', function(){
  var scoreCalculator;

  beforeEach(function(){
    scoreCalculator = new ScoreCalculator();
  });

  it ("initializes with an empty result array", function(){
    expect(scoreCalculator.result).toEqual(0);
  });

  it ("returns a score of 67", function() {
    var scores = [2,3,4,2,5,2,5,1,8,1,3,3,2,3,4,3,6,1,7,2];
    scoreCalculator.calculate(scores);
    expect(scoreCalculator.result).toEqual(67);
  });

  it ("returns a score of 70 with one spare", function() {
    var scores = [2,3,5,1,5,5,2,2,8,1,3,3,2,3,4,3,6,1,7,2];
    scoreCalculator.calculate(scores);
    expect(scoreCalculator.result).toEqual(70)
  });

  it("returns a score of 81 with a spare and a strike", function() {
    var scores = [2,3,5,1,5,5,2,2,8,1,3,4,10,3,3,6,1,7,2];
    scoreCalculator.calculate(scores);
    expect(scoreCalculator.result).toEqual(81);
  });

  it("returns a score of 300 - perfect score", function() {
    var scores = [10,10,10,10,10,10,10,10,10,10,10,10];
    scoreCalculator.calculate(scores)
    expect(scoreCalculator.result).toEqual(300);
  });

});
