'use-strict'

function ScoreCalculator() {
  this.result = 0;
};

ScoreCalculator.prototype.calculate = function(scores) {
var index = 0;
  for ( var eachFrame = 0; eachFrame < 10; eachFrame ++) {
    if (scores[index] === 10) {
        this.result += scores[index] + scores[index + 1] + scores[index + 2];
        index ++;
    } else if (scores[index] + scores[index+ 1] === 10) {
        this.result += scores[index] + scores[index + 1] + scores[index + 2];
        index += 2;
    } else {
        this.result += scores[index] + scores[index + 1];
        index += 2;
    }
  };
};
