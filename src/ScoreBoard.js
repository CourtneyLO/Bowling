'use-strict';

function ScoreBoard(scoreCalculator) {
  this.scoreCalculator = scoreCalculator
  this.scores = []
};

ScoreBoard.prototype.splitScores = function(score) {
  individulaScores = score.split("")
  for (var i = 0; i < score.length; i++) {
  if (individulaScores[i] && individulaScores[i] !== '|') {
    if (individulaScores[i] === 'X') {
       this.scores.push(10);
    } else if (individulaScores[i] === '-') {
        this.scores.push(0)
    } else if (individulaScores[i] === '/'){
       this.scores.push(10 - individulaScores[i - 1])
    } else {
       this.scores.push(Number(individulaScores[i]))
    }
  }
}
return this.scores
}

ScoreBoard.prototype.calculateScore = function() {
  return this.scoreCalculator.calculate(this.scores)
}
