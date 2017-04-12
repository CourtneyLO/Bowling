'use-strict';

function ScoreBoard() {

};

ScoreBoard.prototype.splitScores = function(score) {
  var scores = [];
  score = score.split("")
  for (var i = 0; i < score.length; i++) {
  if (score[i] && score[i] !== '|') {
    scores.push(score[i]);
  }
}
return scores
}
