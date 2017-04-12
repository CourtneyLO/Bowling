'use-strict'

describe("Frames", function() {
  var frames;

  beforeEach(function(){
    frames = new Frames();
  });

  it ("initializes with a fram3 count of 0", function() {
    expect(frames.count).toEqual(1);
  });

  it ("initializes with a maximum frame count of 10", function() {
    expect(frames.MAXFRAMECOUNT).toEqual(10)
  });

  it("increases the frame count for every two scores added to scoreboard", function() {
    expect(frames.increaseCount()).toEqual(2);
  });

});
