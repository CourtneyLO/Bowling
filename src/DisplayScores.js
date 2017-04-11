'use-strict';

function DisplayScores() {
  this.currentFrame = [];
};

DisplayScores.prototype.score = function(score) {
    return this.displayScore(score);
}

DisplayScores.prototype.displayScore = function(score) {
  if (score === "10") {
    return this._setDisplay("X")
  } else {
    return this._addScoreToCurrentFrame(score)
  }
};

DisplayScores.prototype._addScoreToCurrentFrame = function(score) {
  this._resetCurrentFrame()
  this.currentFrame.push(Number(score))
  return this._workingOutSpare(score)
}

DisplayScores.prototype._workingOutSpare = function(score) {
  if (this.currentFrame.reduce((a, b) => a + b, 0) === 10) {
    return this._setDisplay("/")
  } else if (score === "0") {
    return this._setDisplay("-")
  } else {
    return this._setDisplay(score)
  }
};

DisplayScores.prototype._resetCurrentFrame = function() {
  if(this.currentFrame.length > 1) {
    this.currentFrame = [];
  }
};

DisplayScores.prototype._setDisplay = function(element) {
  var score = document.getElementById("bowlingScores")
  return score.innerHTML += "<td>" + element + "</td>";
}
