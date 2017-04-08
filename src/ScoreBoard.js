function ScoreBoard() {
  this.scores = [];
}

ScoreBoard.prototype.score = function(amount) {
  return amount;
};

ScoreBoard.prototype._convertToNumber = function(amount) {
  return Number(amount);
};

ScoreBoard.prototype.newScore = function(amount) {
  this.scores.push(amount);
};
