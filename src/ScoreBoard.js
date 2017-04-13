'use-strict';

function ScoreBoard(scoreCalculator, displayScore) {
  this.scoreCalculator = scoreCalculator;
  this.displayScore = displayScore;
  this.scores = [];
  this.MAXSCOREPERROLL = 10;
  this.MINSCOREPERROLL = 0;
};

ScoreBoard.prototype.splitScores = function(score) {
  individulaScores = score.split("")
  for (var scoreIndex = 0; scoreIndex < score.length; scoreIndex++) {
    if (individulaScores[scoreIndex] !== '|') {
      this._convertToNumber(scoreIndex);
    }
  };
    return this.scores
};

ScoreBoard.prototype._convertToNumber = function(scoreIndex) {
  if (individulaScores[scoreIndex] === 'X') {
     this.scores.push(this.MAXSCOREPERROLL);
  } else if (individulaScores[scoreIndex] === '-') {
      this.scores.push(this.MINSCOREPERROLL)
  } else if (individulaScores[scoreIndex] === '/'){
     this.scores.push(this.MAXSCOREPERROLL - individulaScores[scoreIndex - 1])
  } else {
     this.scores.push(Number(individulaScores[scoreIndex]))
  }
}

ScoreBoard.prototype.displayTotal = function() {
  var result =  this.scoreCalculator.calculate(this.scores)
  this._refreshScores();
  return this.displayScore.total(result)
}

ScoreBoard.prototype._refreshScores = function() {
  this.scores = []
};
