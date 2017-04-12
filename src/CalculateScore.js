'use-strict'

function TotalScore() {
  this.result = [];
  this.scores = [];
};
//
// TotalScore.prototype.determineBonusPoints = function(scores) {
//   if (scores[9][0] === 10 || scores[9][0] + scores[9][1] === 10 ) {
//     console.log("Bonus points")
//     this.bonusPoints(scores)
//   } else
//   this.calculateScore(scores)
//
// }

// TotalScore.prototype.determineBonusPoints = function(scores) {
//   if(scores.length < 9) {
//     this.calculateScore(scores)
//   } else {
//     console.log("Bonus points")
//        this.bonusPoints(scores)
//   }
// };

TotalScore.prototype.calculateScore = function(scores) {
  for(var num = 0; num < scores.length - 3; num ++) {
    for(var i = 0; i < scores[num].length; i ++) {
      if (scores[num][i] === 10 && scores[num].length < 3) {
        scores[num] = scores[num][i] + scores[num + 1].reduce((a, b) => a + b, 0)
        if (scores[num + 1][i] === 10) {
          console.log(scores[num + 2])
          scores[num] = scores[num] + scores[num + 2][i]
        }
      } else if (scores[num][i] + scores[num][i + 1]  === 10) {
        scores[num] = [scores[num][i] + scores[num][1] + scores[num + 1][i]]
      } else {
        scores
      }
      // console.log(scores)
      var allResults = [].concat.apply([], scores)
      // console.log(allResults)
      this.result = allResults.reduce((a, b) => a + b, 0)
    }
  }
};

TotalScore.prototype.bonusRoll = function(scores) {
  if (scores[9][0] === 10 || scores[9][0] + scores[9][1] === 10) {
    this.result += scores[10][0] + scores[10][1] + scores[10][2]
  }
}

TotalScore.prototype.bonusPoints = function(scores) {
  console.log(this.result)
  // scores[9][0] + scores[9][1] + scores[9][2]
};




// TotalScore.prototype.calculateScore = function(scores) {
//   for(var num = 0; num < scores.length; num ++) {
//     console.log(scores)
//     if (scores[num][0] + scores[num][1]  === 10) {
//       console.log(scores[num] = [scores[num][0] + scores[num][1] + scores[num + 1][0]])
//       console.log(this.scores.push(scores[num]))
//     }
//   };
// };



// TotalScore.prototype.bonusScore = function(scores) {
//   return scores[scores.length - 1].reduce((a, b) => a + b, 0)
// };
