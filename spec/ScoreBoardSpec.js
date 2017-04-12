describe("ScoreBoard", function() {
  var scoreBoard;
});

  beforeEach(function() {
    scoreBoard = new ScoreBoard();
  });

  it ("splits string of strikes into array", function() {
    expect(scoreBoard.splitScores("X|X|X|X|X|X|X|X|X|X||XX")).toEqual(["X","X","X","X","X","X","X","X","X","X","X","X"]);
  });

  it ("splits string of 0s and 9s into array", function() {
    expect(scoreBoard.splitScores("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||")).toEqual(["9","-","9","-","9","-","9","-","9","-","9","-","9","-","9","-","9","-","9","-"]);
  });

  it ("splints string with spares", function() {
    expect(scoreBoard.splitScores("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5")).toEqual(["5","/","5","/","5","/","5","/","5","/","5","/","5","/","5","/","5","/","5","/","5"])
  });

  it ("splints string with a mixture of scores", function() {
    expect(scoreBoard.splitScores("X|7/|9-|X|-8|8/|-6|X|X|X||81")).toEqual(['X','7','/','9','-','X','-','8','8','/','-','6','X','X','X','8','1'])
  });
