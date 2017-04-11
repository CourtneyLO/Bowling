'use-strict';

function DisplayScores() {
};

DisplayScores.prototype.score = function(score, spare) {
  return this._displayScore(score, spare);
}

DisplayScores.prototype._displayScore = function(amount, spare) {
  if (amount === '10') {
    var score = document.getElementById("bowlingScores")
    return score.innerHTML += "<td>X</td>";
  } else if (spare) {
    console.log("Hello")
    return '/'
  } else if (amount === '0') {
    return "-"
  } else {
    return amount;
  }
};

// DisplayScoreBoard.prototype._spare = function() {
//
// };
