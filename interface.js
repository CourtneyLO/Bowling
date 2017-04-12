$(document).ready(function(){
  var frames = new Frames();
  var displayScores = new DisplayScores();
  var scoreCalculator = new ScoreCalculator();
  var scoreBoard = new ScoreBoard(frames, displayScores, scoreCalculator);

  $('#getValue').click(function() {
      scoreBoard.rollScore($("#score").val());
  });

  $('#getTotalScore').click(function() {
    scoreBoard.getTotalScore()
  });


});
