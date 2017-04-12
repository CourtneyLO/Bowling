'use-strict'

function ScoreCalculator() {
  this.results = [];
  this.FRAMES = 10;
  this.MAXPERROLL = 10;
};

ScoreCalculator.prototype.calculate = function(scores) {
  var result = 0;
  var index = 0;
  for ( var eachScore = 0; eachScore < this.FRAMES; eachScore ++) {
    if (this._isStrike(scores, index)) {
        result += this._strike(scores, index);
        index ++;
    } else if (this._isSpare(scores, index)) {
        result += this._spare(scores, index);
        index += 2;
    } else {
        result += this._neither(scores, index)
        index += 2;
    }
  };
  return result;
};

ScoreCalculator.prototype._isStrike = function(scores, index) {
  return scores[index]=== this.MAXPERROLL;
};

ScoreCalculator.prototype._strike = function(scores, index) {
  return scores[index] + scores[index + 1] + scores[index + 2];
};

ScoreCalculator.prototype._spare = function(scores, index) {
  return scores[index] + scores[index + 1] + scores[index + 2];
};

ScoreCalculator.prototype._neither = function(scores, index) {
  return scores[index] + scores[index + 1];
}

ScoreCalculator.prototype._isSpare = function(scores, index) {
  return scores[index] + scores[index+ 1] === this.MAXPERROLL;
};
