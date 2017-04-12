'use-strict';

function ScoreBoard(frameCount, displayScores) {
  this.frameCount = frameCount;
  this.displayScores = displayScores
  this.scores = [];
  this.MAXROLLS = 20;
}

ScoreBoard.prototype.firstRoll = function(amount) {
  if (this.scores.length < this.MAXROLLS || this.scores[this.scores.length - 1] +  this.scores[this.scores.length - 2] === 10 ) {
    this.displayScores.score(amount);
    this.currentScore(amount);
  } else {
    throw new Error("Game is over, please start a new game");
  }

};

ScoreBoard.prototype.currentScore = function(amount) {
  var score = this._convertToNumber(amount);
  this._inputCurrentScore(score)
};

ScoreBoard.prototype.startNewGame = function() {
  return new ScoreBoard(this.frameCount);
};

ScoreBoard.prototype._convertToNumber = function(amount) {
  return Number(amount);
};

ScoreBoard.prototype._inputCurrentScore = function(score) {
    return this.scores.push(score)
};
