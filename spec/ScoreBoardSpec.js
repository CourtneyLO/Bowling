describe("ScoreBoard", function() {
  var scoreBoard;
});

  beforeEach(function() {
    scoreBoard = new ScoreBoard();
  });

  it ("splits string of strikes into array", function() {
    expect(scoreBoard.splitScores("X|X|X|X|X|X|X|X|X|X||XX")).toEqual(["X","X","X","X","X","X","X","X","X","X","X","X"]);
  })
