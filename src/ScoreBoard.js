'use-strict';

function ScoreBoard() {
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
    } else {
      this.scores.push(individulaScores[i])
    }
  }
}
return this.scores
}
