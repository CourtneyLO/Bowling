'use-strict'

describe('ScoreCalculator', function(){
  var scoreCalculator;

  beforeEach(function(){
    scoreCalculator = new ScoreCalculator();
  });

  it ("initializes with an empty result array", function(){
    expect(scoreCalculator.result).toEqual([]);
  });

  it("initializes with a scores array", function() {
    expect(scoreCalculator.scores).toEqual([]);
  });

  it ("returns a score of 67", function() {
    var scores = [[2,3],[4,2],[5,2],[5,1],[8,1],[3,3],[2,3],[4,3],[6,1],[7,2]];
    scoreCalculator.calculate(scores);
    expect(scoreCalculator.result).toEqual(67);
  });

  it ("returns a score of 70 with one spare", function() {
    var scores = [[2,3],[5,1],[5,5],[2,2],[8,1],[3,3],[2,3],[4,3],[6,1],[7,2]];
    scoreCalculator.calculate(scores);
    expect(scoreCalculator.result).toEqual(70)
  });

  it("returns a score of 81 with a spare and a strike", function() {
    var scores = [[2,3],[5,1],[5,5],[2,2],[8,1],[3,4],[10,0],[3,3],[6,1],[7,2]];
    scoreCalculator.calculate(scores);
    expect(scoreCalculator.result).toEqual(81);
  });

  it("returns a score of 120 with a mixture of strikes and spares consecuatively", function() {
    var scores = [[2,3],[2,2],[5,5],[10,0],[7,3],[3,3],[10,0],[8,2],[6,1],[7,2]];
    scoreCalculator.calculate(scores);
    expect(scoreCalculator.result).toEqual(120);
  });

  it("returns a score of 183 made up mostly of spares and strikes", function() {
    var scores = [[5,5],[10,0],[7,3],[6,4],[8,2],[10,0],[10,0],[6,4],[9,1],[5,2],[0]];
    scoreCalculator.calculate(scores);
    expect(scoreCalculator.result).toEqual(181);
  });

  it("returns 257 for a full board of strikes except the last two throws", function() {
    var scores = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[3,4]];
    scoreCalculator.calculate(scores);
    expect(scoreCalculator.result).toEqual(257);
  });

  it("returns a total score with the bonus roll included", function() {
    var scores = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[4,5],[10,10,10]];
    scoreCalculator.calculate(scores)
    expect(scoreCalculator.result).toEqual(262);
  });

  it("returns a total score with the bonus roll included", function() {
    var scores = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[7,3],[10,0],[7,3,1]];
    scoreCalculator.calculate(scores)
    expect(scoreCalculator.result).toEqual(248);
  });

  it("returns a total score with a spare in the bonus roll", function() {
    var scores = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[7,3],[5,5],[7,3,1]];
    scoreCalculator.calculate(scores)
    expect(scoreCalculator.result).toEqual(240);
  });

  it("returns a total score with a strike in the bonus roll", function() {
    var scores = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[7,3],[5,5],[10,10,10]];
    scoreCalculator.calculate(scores)
    expect(scoreCalculator.result).toEqual(262);
  });

  it("returns a total score with the bonus roll included", function() {
    var scores = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,10,10]];
    scoreCalculator.calculate(scores)
    expect(scoreCalculator.result).toEqual(300);
  });


});
