'use-strict'

function ScoreCalculator() {
  this.result = [];
  this.scores = [];
};

ScoreCalculator.prototype.calculate = function(scores) {
  for(var num = 0; num < scores.length; num ++) {
    for(var i = 0; i < scores[num].length; i ++) {
      if (scores[num][i] === 10 && scores[num].length < 3) {
        scores[num] = scores[num][i] + scores[num + 1].reduce((a, b) => a + b, 0)
        if (scores[num + 1][i] === 10) {
          scores[num] = scores[num] + scores[num + 2][i]
        }
      } else if (scores[num][i] + scores[num][i + 1]  === 10) {
        scores[num] = [scores[num][i] + scores[num][1] + scores[num + 1][i]]
      } else {
        scores
      }
      var allResults = [].concat.apply([], scores)
      this.result = allResults.reduce((a, b) => a + b, 0)
    }
  }
};
