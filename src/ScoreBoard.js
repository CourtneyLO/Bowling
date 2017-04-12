'use-strict';

function ScoreBoard(frameCount, displayScores, scoreCalculator) {
  this.frameCount = frameCount;
  this.displayScores = displayScores;
  this.scoreCalculator = scoreCalculator;
  this.scores = [];
  this.MAXROLLS = 20;
  this.BONUSBALL = 1;
}

ScoreBoard.prototype.rollScore = function(score) {
  if (this._convertToNumber(score) <= 10) {
    return this.firstRoll(score);
  } else {
    throw new Error("Score is invalid, please try again")
  }
};

ScoreBoard.prototype.firstRoll = function(score) {
  if (this.scores.length < this._isThrowAllowed()) {
    this.displayScores.score(score);
    this._currentScore(score);
  } else {
    throw new Error("Game is over, please start a new game");
  }
};

ScoreBoard.prototype._isThrowAllowed = function() {
  if (this.scores.length >= 20 && this._bonusBall()) {
    return this.MAXROLLS += this.BONUSBALL;
  } else {
    return this.MAXROLLS
  }
};

ScoreBoard.prototype.getTotalScore = function() {
  this.scoreCalculator.calculate(this.scores);
  return this.displayScores.total(this.scoreCalculator.result);
};

ScoreBoard.prototype.startNewGame = function() {
  return new ScoreBoard(this.frameCount);
};

ScoreBoard.prototype._currentScore = function(amount) {
  var score = this._convertToNumber(amount);
  this._inputCurrentScore(score)
};

ScoreBoard.prototype._convertToNumber = function(amount) {
  return Number(amount);
};

ScoreBoard.prototype._inputCurrentScore = function(score) {
    return this.scores.push(score)
};

ScoreBoard.prototype._bonusBall = function() {
  return this.scores[this.scores.length - 1] +  this.scores[this.scores.length - 2] >= 10
};
