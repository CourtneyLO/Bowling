describe('TotalScore', function(){
  var totalScore;

  beforeEach(function(){
    totalScore = new TotalScore();
  });

  it ("initializes with an empty result array", function(){
    expect(totalScore.result).toEqual([]);
  });

  it("initializes with a scores array", function() {
    expect(totalScore.scores).toEqual([]);
  });

  it ("returns a score of 67", function() {
    var scores = [[2,3],[4,2],[5,2],[5,1],[8,1],[3,3],[2,3],[4,3],[6,1],[7,2]];
    totalScore.calculateScore(scores);
    expect(totalScore.result).toEqual(67);
  });

  it ("returns a score of 70 with one spare", function() {
    var scores = [[2,3],[5,1],[5,5],[2,2],[8,1],[3,3],[2,3],[4,3],[6,1],[7,2]];
    totalScore.calculateScore(scores);
    expect(totalScore.result).toEqual(70)
  });

  it("returns a score of 81 with a spare and a strike", function() {
    var scores = [[2,3],[5,1],[5,5],[2,2],[8,1],[3,4],[10,0],[3,3],[6,1],[7,2]];
    totalScore.calculateScore(scores);
    expect(totalScore.result).toEqual(81);
  });

  it("returns a score of 120 with a mixture of strikes and spares consecuatively", function() {
    var scores = [[2,3],[2,2],[5,5],[10,0],[7,3],[3,3],[10,0],[8,2],[6,1],[7,2]];
    totalScore.calculateScore(scores);
    expect(totalScore.result).toEqual(120);
  });

  it("returns a score of 183 made up mostly of spares and strikes", function() {
    var scores = [[5,5],[10,0],[7,3],[6,4],[8,2],[10,0],[10,0],[6,4],[9,1],[5,2]];
    totalScore.calculateScore(scores);
    expect(totalScore.result).toEqual(181);
  });

  it("returns 257 for a full board of strikes except the last two throws", function() {
    var scores = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[3,4]];
    totalScore.calculateScore(scores);
    expect(totalScore.result).toEqual(257);
  });

});
