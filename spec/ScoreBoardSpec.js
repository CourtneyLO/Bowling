describe("ScoreBoard", function() {
  var scoreBoard;
});

  beforeEach(function() {
    scoreBoard = new ScoreBoard();
  });

  it ("splits string of strikes into array", function() {
    expect(scoreBoard.splitScores("X|X|X|X|X|X|X|X|X|X||XX")).toEqual(["X","X","X","X","X","X","X","X","X","X","X","X"]);
  })

  it ("splits string of 0s and 9s into array", function() {
    expect(scoreBoard.splitScores("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||")).toEqual(["9","-","9","-","9","-","9","-","9","-","9","-","9","-","9","-","9","-","9","-"]);
  })
