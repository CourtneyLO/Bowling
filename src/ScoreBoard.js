function ScoreBoard() {
  this.scores = [];
}

ScoreBoard.prototype.score = function(amount) {
  this.newScore(amount);
  return amount;
};

ScoreBoard.prototype._convertToNumber = function(amount) {
  return Number(amount);
};

ScoreBoard.prototype.newScore = function(amount) {
  var score = this._convertToNumber(amount);
  this.scores.push(score);
};
