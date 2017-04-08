function Result() {

};

Result.prototype.displayResult = function(scoreTotal) {
  if (scoreTotal === 0) {
    return "Gutter Game"
  } else if (scoreTotal === 300) {
    return "Perfect Score"
  } else {
    return "Well Played"
  }

};
