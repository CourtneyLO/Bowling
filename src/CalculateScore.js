'use-strict'

function ScoreCalculator() {
  this.result = 0;
};

ScoreCalculator.prototype.calculate = function(scores) {
  for (indexEachScore = 0; indexEachScore < scores.length; indexEachScore ++) {
    this.result += scores[indexEachScore];
  }

};
