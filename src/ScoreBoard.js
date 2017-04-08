function ScoreBoard() {
  this.scores = [];
  this.result = 0;
}

ScoreBoard.prototype.firstRoll = function(amount) {
  this.newScore(amount);
  return this._displayScore(amount);
};

ScoreBoard.prototype.secondRoll = function(amount) {
  this.newScore(amount);
  return amount
}

ScoreBoard.prototype._convertToNumber = function(amount) {
  return Number(amount);
};

ScoreBoard.prototype.newScore = function(amount) {
  var score = this._convertToNumber(amount);
  this.scores.push(score);
};

ScoreBoard.prototype.calculateScore = function(scores) {
  return this.result = scores.reduce((a, b) => a + b, 0);
};

ScoreBoard.prototype._displayScore = function(amount) {
  if (amount === '10') {
    return "X";
  } else {
    return amount;
  }
}
