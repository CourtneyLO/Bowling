'use-strict'

describe('ScoreCalculator', function(){
  var scoreCalculator;

  beforeEach(function(){
    scoreCalculator = new ScoreCalculator();
  });

  it ("returns a score of 67", function() {
    var scores = [2,3,4,2,5,2,5,1,8,1,3,3,2,3,4,3,6,1,7,2];
    scoreCalculator.calculate(scores);
    expect(scoreCalculator.calculate(scores)).toEqual(67);
  });

  it ("returns a score of 70 with one spare", function() {
    var scores = [2,3,5,1,5,5,2,2,8,1,3,3,2,3,4,3,6,1,7,2];
    scoreCalculator.calculate(scores);
    expect(scoreCalculator.calculate(scores)).toEqual(70)
  });

  it("returns a score of 81 with a spare and a strike", function() {
    var scores = [2,3,5,1,5,5,2,2,8,1,3,4,10,3,3,6,1,7,2];
    scoreCalculator.calculate(scores);
    expect(scoreCalculator.calculate(scores)).toEqual(81);
  });

  it("returns a score of 300 - perfect score", function() {
    var scores = [10,10,10,10,10,10,10,10,10,10,10,10];
    scoreCalculator.calculate(scores)
    expect(scoreCalculator.calculate(scores)).toEqual(300);
  });

  it("returns a score of 0 - gutter game", function() {
    var scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    scoreCalculator.calculate(scores)
    expect(scoreCalculator.calculate(scores)).toEqual(0);
  });

  it("returns a total score of 240 with a spare in the 10th frame", function() {
    var scores = [10,10,10,10,10,10,10,7,3,5,5,7,3,1];
    scoreCalculator.calculate(scores)
    expect(scoreCalculator.calculate(scores)).toEqual(240);
  });

  it("returns 262 with a three strikes in the tenth frame", function() {
    var scores = [10,10,10,10,10,10,10,7,3,5,5,10,10,10];
    expect(scoreCalculator.calculate(scores)).toEqual(262);
  });

  it("returns 248 with 9th frame being a strike and the bonus roll included", function() {
    var scores = [10,10,10,10,10,10,10,7,3,10,7,3,1];
    expect(scoreCalculator.calculate(scores)).toEqual(248);
  });



});
