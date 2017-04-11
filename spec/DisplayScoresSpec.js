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

  // it ("returns '/' for a spare", function() {
  //   displayScores.score("2");
  //   expect(displayScores.score("8")).toEqual("/");
  // });
});
