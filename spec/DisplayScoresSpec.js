'use-strict';

describe("DisplayScore", function() {
  var displayScores;

  beforeEach(function() {
    displayScores = new DisplayScores();

  });

  it ("displays 'X' for a strike", function() {
    expect(displayScores.score("10")).toMatch('<td>X</td>');
  });

  it ("displays '-' for a miss", function() {
    expect(displayScores.score("0")).toMatch("<td>-</td>")
  });

  it("displays 2 for a score of 2", function(){
    expect(displayScores.score("2")).toMatch("<td>2</td>")
  });

  it ("displays '/' for a spare", function() {
    displayScores.score("2");
    expect(displayScores.score("8")).toMatch("/");
  });

  it ("resets log after two throws", function() {
    displayScores.score("2");
    displayScores.score("8");
    displayScores.score("5");
    expect(displayScores.score("5")).toMatch("/");
  });

  it ("displays a full score board", function() {
    displayScores.score("2");
    displayScores.score("8");
    displayScores.score("0");
    displayScores.score("6");
    displayScores.score("10");
    displayScores.score("8");
    displayScores.score("2");
    displayScores.score("7");
    displayScores.score("3");
    displayScores.score("6");
    displayScores.score("1");
    displayScores.score("10");
    displayScores.score("6");
    displayScores.score("1");
    displayScores.score("5");
    displayScores.score("5");
    displayScores.score("1");
    expect(displayScores.score("5")).toMatch('<td>2</td><td>/</td><td>-</td><td>6</td><td>X</td><td>8</td><td>/</td><td>7</td><td>/</td><td>6</td><td>1</td><td>X</td><td>6</td><td>1</td><td>5</td><td>/</td><td>1</td><td>5</td>');
  });

  it("displays a final result of 29", function() {
    var totalScore = 29;
    expect(displayScores.total(totalScore)).toMatch('<td>29</td>')
  });
});
