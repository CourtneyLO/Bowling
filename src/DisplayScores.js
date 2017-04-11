'use-strict';

function DisplayScores() {
  this.scoreLog = [];
};

DisplayScores.prototype.score = function(score) {
    return this.displayScore(score);
}

DisplayScores.prototype.displayScore = function(amount) {
  if (amount === "10") {
    return this._setDisplay("X")
  } else {
    return this._workingOutSpare(amount)
  }
};

DisplayScores.prototype._workingOutSpare = function(amount) {
  this._resetLog()
  this.scoreLog.push(Number(amount))
  if (this.scoreLog.reduce((a, b) => a + b, 0) === 10) {
    return this._setDisplay("/")
  }
  if (amount === "0") {
  return this._setDisplay("-")
} else {
  return this._setDisplay(amount)
}
};

DisplayScores.prototype._resetLog = function(element) {
  if(this.scoreLog.length > 1) {
    this.scoreLog = [];
  }
};

DisplayScores.prototype._setDisplay = function(element) {
  var score = document.getElementById("bowlingScores")
  return score.innerHTML += "<td>" + element + "</td>";
}
