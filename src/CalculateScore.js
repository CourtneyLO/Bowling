'use-strict'

function TotalScore() {
  this.result = [];
  this.scores = []
};

TotalScore.prototype.calculateScore = function(scores) {
  for(var num = 0; num < scores.length; num ++) {
    if (scores[num][0] === 10) {
        scores[num] = scores[num][0] + scores[num + 1].reduce((a, b) => a + b, 0)
      if (scores[num + 1][0] === 10) {
        scores[num] = scores[num] + scores[num + 2][0]
      }
    } else if (scores[num][0] + scores[num][1]  === 10) {
      scores[num] = [scores[num][0] + scores[num][1] + scores[num + 1][0]]
    } else {
      scores
    }
    var allResults = [].concat.apply([], scores)
    this.result = allResults.reduce((a, b) => a + b, 0)
  }
};

TotalScore.prototype.bonusScore = function(scores) {
  return scores[scores.length - 1].reduce((a, b) => a + b, 0)
};
