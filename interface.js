$(document).ready(function(){
  var displayScore = new DisplayScore();
  var scoreCalculator = new ScoreCalculator();
  var scoreBoard = new ScoreBoard(scoreCalculator, displayScore);

  $('#getValue').click(function() {
      scoreBoard.takeScores($("#score").val());
      scoreBoard.displayTotal();
  });

});
