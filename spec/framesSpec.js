describe("Frames", function() {
  var frames;

  beforeEach(function(){
    frames = new Frames();
  });

  it ("initializes with a fram count of 0", function() {
    expect(frames.count).toEqual(0);
  });


});
