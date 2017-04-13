$(document).ready(function(){
  var displayScore = new DisplayScore();
  var scoreCalculator = new ScoreCalculator();
  var scoreBoard = new ScoreBoard(scoreCalculator, displayScore);

  $('#getValue').click(function() {
      scoreBoard.splitScores($("#score").val());
      scoreBoard.displayTotal()
  });

});
