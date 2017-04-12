'use-strict';

function DisplayScores() {
};

DisplayScores.prototype.total = function(totalScore) {
  var total = document.getElementById("bowlingScores")
  return total.innerHTML = '<p>' + totalScore + '</p>'
}
