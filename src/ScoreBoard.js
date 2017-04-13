'use-strict';

function ScoreBoard() {
  this.scores = [];
  this.SCORESYMBOLS = {'X': 10,
                        '/': 10,
                        '-': 0}
};


ScoreBoard.prototype.splitScores = function(score) {
  individulaScores = score.split("")
  for (var scoreIndex = 0; scoreIndex < score.length; scoreIndex++) {
    if (individulaScores[scoreIndex] !== '|') {
      if (this.SCORESYMBOLS.hasOwnProperty(individulaScores[scoreIndex])) {
        this.scores.push(this.SCORESYMBOLS[individulaScores[scoreIndex]])
      }
    }
  };
    return this.scores
};
