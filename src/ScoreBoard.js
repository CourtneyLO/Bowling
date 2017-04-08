function ScoreBoard() {
  this.scores = [];
  this.result = 0;
  this.currentFrame = [];
  this.MAXSCORE = 10;
  this.MINSCORE = 0;
}

ScoreBoard.prototype.firstRoll = function(amount) {
  this._resetCurrentFrame()
  this.addCurrentScore(amount);
  return this._displayScore(amount);
};

ScoreBoard.prototype.secondRoll = function(amount) {
  this.addCurrentScore(amount);
  return this._displayScore(amount);
}

ScoreBoard.prototype._convertToNumber = function(amount) {
  return Number(amount);
};

ScoreBoard.prototype.addCurrentScore = function(amount) {
  var score = this._convertToNumber(amount);
  if (score === this.MAXSCORE) {
    this.currentFrame.push(score, this.MINSCORE)
  } else {
    this.currentFrame.push(score)
  }
  return this.scores.push(score);
};

ScoreBoard.prototype._resetCurrentFrame =  function() {
  if (this.currentFrame.length == 2) {
    this.currentFrame = [];
  }
};

ScoreBoard.prototype.calculateScore = function(scores) {
  return this.result = scores.reduce((a, b) => a + b, 0);
};

ScoreBoard.prototype._spare = function() {
  return this.currentFrame[0] + this.currentFrame[1] === this.MAXSCORE
};

ScoreBoard.prototype._displayScore = function(amount) {
  if (amount === '10') {
    return "X";
  } else if (this._spare()) {
    return '/'
  } else if (amount === '0') {
    return "-"
  } else {
    return amount;
  }
};
