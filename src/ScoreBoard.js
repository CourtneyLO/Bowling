'use-strict';

function ScoreBoard(scoreCalculator, displayScore) {
  this.scoreCalculator = scoreCalculator;
  this.displayScore = displayScore;
  this.scores = [];
  this.MAXSCOREPERROLL = 10;
  this.MINSCOREPERROLL = 0;
};

ScoreBoard.prototype.takeScores = function(score) {
  if (this._isValid(score)) {
    return this._splitScores(score);
  } else
  throw new Error("This score is invalid - please try again")
};

ScoreBoard.prototype._splitScores = function(score) {
  individualScores = score.split("");
  this._isValid(individualScores);
  for (var scoreIndex = 0; scoreIndex < score.length; scoreIndex++) {
    if (individualScores[scoreIndex] !== '|') {
      this._convertToNumber(scoreIndex);
    }
  };
    return this.scores;
};

ScoreBoard.prototype._convertToNumber = function(scoreIndex) {
  if (individualScores[scoreIndex] === 'X') {
     this.scores.push(this.MAXSCOREPERROLL);
  } else if (individualScores[scoreIndex] === '-') {
      this.scores.push(this.MINSCOREPERROLL);
  } else if (individualScores[scoreIndex] === '/'){
     this.scores.push(this.MAXSCOREPERROLL - individualScores[scoreIndex - 1]);
  } else {
     this.scores.push(Number(individualScores[scoreIndex]));
  }
};

ScoreBoard.prototype.displayTotal = function() {
  var result =  this.scoreCalculator.calculate(this.scores);
  this._refreshScores();
  return this.displayScore.total(result);
};

ScoreBoard.prototype._refreshScores = function() {
  this.scores = [];
};

ScoreBoard.prototype._isValid = function(score) {
  return this._count(score) === 11
}

ScoreBoard.prototype._count = function(score) {
  var count = 0;
  for(var i = 0; i < score.length; ++i){
    if(score[i] == '|')
        count++;
}
 return count
}
