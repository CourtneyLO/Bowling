'use-strict';

function ScoreBoard(scoreCalculator, displayScore) {
  this.scoreCalculator = scoreCalculator;
  this.displayScore = displayScore
  this.scores = [];
  this.SCORESYMBOLS = {'X': 10,
                       '-': 0,
                       '/': 10}
};


ScoreBoard.prototype.splitScores = function(score) {
  individualScores = score.split("")
  for (var scoreIndex = 0; scoreIndex < score.length; scoreIndex++) {
    if (individualScores[scoreIndex] !== '|') {
      this._sortSymbolsNumbers(individualScores, scoreIndex);
    }
  };
    return this.scores
};

ScoreBoard.prototype._checkScoreSymbols = function(individual, scoreIndex) {
  return this.SCORESYMBOLS.hasOwnProperty(individualScores[scoreIndex]);
}

ScoreBoard.prototype._sortSymbolsNumbers = function(individualScores, scoreIndex) {
  if (this._checkScoreSymbols(individualScores, scoreIndex)) {
    this._convertSymbols(individualScores, scoreIndex);
  } else {
    this.scores.push(Number(individualScores[scoreIndex]));
  }
};

ScoreBoard.prototype._convertSymbols = function(individualScores, scoreIndex) {
  if (this._isStrike(individualScores, scoreIndex) || this._isZero(individualScores, scoreIndex) ) {
    this.scores.push(this.SCORESYMBOLS[individualScores[scoreIndex]]);
  } else {
    this.scores.push(this.SCORESYMBOLS[individualScores[scoreIndex]] - individualScores[scoreIndex - 1]);
  }
};

ScoreBoard.prototype._isStrike = function(individualScores, scoreIndex) {
  return individualScores[scoreIndex] === 'X';
};

ScoreBoard.prototype._isZero = function(individualScores, scoreIndex) {
  return individualScores[scoreIndex] === '-';
}

ScoreBoard.prototype.displayTotal = function() {
  var result =  this.scoreCalculator.calculate(this.scores)
  this._refreshScores();
  return this.displayScore.total(result)
}

ScoreBoard.prototype._refreshScores = function() {
  this.scores = []
};
