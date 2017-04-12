'use-strict'

describe('ScoreCalculator', function(){
  var scoreCalculator;

  beforeEach(function(){
    scoreCalculator = new ScoreCalculator();
  });

  it ("initializes with an empty result array", function(){
    expect(scoreCalculator.result).toEqual(0);
  });

});
