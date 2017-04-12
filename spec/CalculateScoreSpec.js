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

});
