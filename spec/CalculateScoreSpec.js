'use-strict'

describe('ScoreCalculator', function(){
  var scoreCalculator;

  beforeEach(function(){
    scoreCalculator = new ScoreCalculator();
  });

  describe("initializes with:" , function() {
    it ("a frame count of 10", function() {
      expect(scoreCalculator.FRAMES).toEqual(10);
    });

    it ("a maximum score per roll constant of 10", function() {
      expect(scoreCalculator.MAXPERROLL).toEqual(10);
    });
  });

  describe("returns score of:", function() {
    it ("67 with no strikes or spares", function() {
      var scores = [2,3,4,2,5,2,5,1,8,1,3,3,2,3,4,3,6,1,7,2];
      scoreCalculator.calculate(scores);
      expect(scoreCalculator.calculate(scores)).toEqual(67);
    });

    it ("70 with one spare", function() {
      var scores = [2,3,5,1,5,5,2,2,8,1,3,3,2,3,4,3,6,1,7,2];
      scoreCalculator.calculate(scores);
      expect(scoreCalculator.calculate(scores)).toEqual(70)
    });

    it("81 with a spare and a strike", function() {
      var scores = [2,3,5,1,5,5,2,2,8,1,3,4,10,3,3,6,1,7,2];
      scoreCalculator.calculate(scores);
      expect(scoreCalculator.calculate(scores)).toEqual(81);
    });

    it("300 - perfect score", function() {
      var scores = [10,10,10,10,10,10,10,10,10,10,10,10];
      scoreCalculator.calculate(scores)
      expect(scoreCalculator.calculate(scores)).toEqual(300);
    });

    it("0 - gutter game", function() {
      var scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      scoreCalculator.calculate(scores)
      expect(scoreCalculator.calculate(scores)).toEqual(0);
    });
  });

  describe("returns a total score of:", function() {
    it("240 with a spare in the tenth frame", function() {
      var scores = [10,10,10,10,10,10,10,7,3,5,5,7,3,1];
      scoreCalculator.calculate(scores)
      expect(scoreCalculator.calculate(scores)).toEqual(240);
    });

    it("262 with three strikes in the tenth frame", function() {
      var scores = [10,10,10,10,10,10,10,7,3,5,5,10,10,10];
      expect(scoreCalculator.calculate(scores)).toEqual(262);
    });

    it("248 with the ninth frame being a strike and the bonus roll included", function() {
      var scores = [10,10,10,10,10,10,10,7,3,10,7,3,1];
      expect(scoreCalculator.calculate(scores)).toEqual(248);
    });
  });
});
