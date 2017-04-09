describe("BonusBall", function() {
  var bonusBall;

  beforeEach(function() {
    bonusBall = new BonusBall;
  });

  it("returns an array of three strikes", function() {
    var scores = [10,10,10]
    expect(bonusBall.bonusPoints(scores)).toEqual(30)
  });
