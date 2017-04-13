'use-strict';

function ScoreBoard(frameCount, displayScores) {
  this.frameCount = frameCount;
  this.displayScores = displayScores
  this.scores = [];
  this.result = 0;
  this.currentFrame = [];
  this.MAXSCORE = 10;
  this.MINSCORE = 0;
  this.TURNSPERFRAME = 2;
  this.MAXTURNSPERFRAME = 3;
}

ScoreBoard.prototype.firstRoll = function(amount) {
  if (this.scores.length < 10 ) {
    this.displayScores.score(amount);
    this.currentScore(amount);
  } else {
    throw new Error("Game is over, please start a new game");
  }
};

ScoreBoard.prototype.currentScore = function(amount) {
  var score = this._convertToNumber(amount);
  this._inputCurrentScore(score)
  this._addCompletedFrame()
};

ScoreBoard.prototype.startNewGame = function() {
  return new ScoreBoard(this.frameCount);
};

ScoreBoard.prototype._convertToNumber = function(amount) {
  return Number(amount);
};

ScoreBoard.prototype._inputCurrentScore = function(score) {
  if (score === this.MAXSCORE && this.frameCount.count < 10) {
    this.currentFrame.push(score, this.MINSCORE)
  } else {
    this.currentFrame.push(score)
  }
};

ScoreBoard.prototype._resetCurrentFrame =  function() {
  if (this._completeFrame()) {
    this.currentFrame = [];
  }
};

ScoreBoard.prototype._addCompletedFrame = function() {
  if (this._completeFrame()) {
    this.scores.push(this.currentFrame);
  }
  this._resetCurrentFrame()
  this.frameCount.increaseCount()
};

ScoreBoard.prototype._completeFrame = function() {
  if (this.frameCount.count === 10 && (this._strike() || this._spare()) ) {
    return this.currentFrame.length === this.MAXTURNSPERFRAME;
  } else {
    return this.currentFrame.length === this.TURNSPERFRAME;
  }
};

ScoreBoard.prototype._spare = function() {
  return this.currentFrame[0] + this.currentFrame[1] === this.MAXSCORE
};

ScoreBoard.prototype._strike = function() {
  return this.currentFrame[0] === this.MAXSCORE;
};
