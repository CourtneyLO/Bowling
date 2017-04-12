$(document).ready(function(){
  var frames = new Frames();
  var displayScores = new DisplayScores();
  var scoreCalculator = new ScoreCalculator();
  var scoreBoard = new ScoreBoard(frames, displayScores, scoreCalculator);

  $(function () {
    $('#getTotalScore').hide()
  });

  $('#getValue').click(function() {
      scoreBoard.rollScore($("#score").val());
      // console.log(($(scoreBoard.scores.length).val())
      // $('#getTotalScore').show()
      //          if ($(scoreBoard.scores.length).val() > 20) {
      //            $('.roll1').prop('disabled', true)
      //        } else {
      //            $('.roll1').prop('disabled', false)
      //        }
  });

  $('#getTotalScore').click(function() {
    scoreBoard.getTotalScore()
  });


});
