'use-strict';

describe("DisplayScore", function() {
  var displayScores;


  beforeEach(function() {
    displayScores = new DisplayScores();

  });

  it ("returns 'X' for a strike", function() {
    expect(displayScores.score("10")).toMatch('<td>X</td>');
  });

  it ("returns '-' for a miss", function() {
    expect(displayScores.score("0")).toEqual("-")
  });

  // it ("returns '/' for a spare", function() {
  //   displayScores.score("2");
  //   expect(displayScores.score("8")).toEqual("/");
  // });
});
