'use-strict'

function ScoreCalculator() {
  this.results = [];
};

ScoreCalculator.prototype.calculate = function(scores) {
  var result = 0;
  var index = 0;
  for ( var eachFrame = 0; eachFrame < 10; eachFrame ++) {
    if (scores[index] === 10) {
        result += scores[index] + scores[index + 1] + scores[index + 2];
        index ++;
    } else if (scores[index] + scores[index+ 1] === 10) {
        result += scores[index] + scores[index + 1] + scores[index + 2];
        this.results.push(result)
        index += 2;
    } else {
        result += scores[index] + scores[index + 1];
        this.results.push(result)
        index += 2;
    }
  };
  return result;
};
