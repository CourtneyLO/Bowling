function ScoreBoard() {
  this.scores = [];
  this.result = 0;
  this.currentFrame = [];
  this.MAXSCORE = 10;
  this.MINSCORE = 0;
  this.TURNSPERFRAME = 2;
}

ScoreBoard.prototype.firstRoll = function(amount) {
  this._resetCurrentFrame()
  this.currentScore(amount);
  return this._displayScore(amount);
};

ScoreBoard.prototype.secondRoll = function(amount) {
  this.currentScore(amount);
  return this._displayScore(amount);
}

ScoreBoard.prototype._convertToNumber = function(amount) {
  return Number(amount);
};

ScoreBoard.prototype.currentScore = function(amount) {
  var score = this._convertToNumber(amount);
  this._inputCurrentScore(score)
  this._addCompletedFrame()
}


ScoreBoard.prototype._resetCurrentFrame =  function() {
  if (this.currentFrame.length == 2) {
    this.currentFrame = [];
  }
};

ScoreBoard.prototype._inputCurrentScore = function(score) {
  if (score === this.MAXSCORE) {
    this.currentFrame.push(score, this.MINSCORE)
  } else {
    this.currentFrame.push(score)
  }
};

ScoreBoard.prototype._addCompletedFrame = function() {
  if (this._completeFrame()) {
    return this.scores.push(this.currentFrame);
  }
};

ScoreBoard.prototype._spare = function() {
  return this.currentFrame[0] + this.currentFrame[1] === this.MAXSCORE
};

ScoreBoard.prototype._strike = function() {
  return this.currentFrame[0] === this.MAXSCORE
};

ScoreBoard.prototype._completeFrame = function() {
  return this.currentFrame.length == this.TURNSPERFRAME
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
