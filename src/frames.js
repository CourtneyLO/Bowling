'use-strict'

function Frames() {
  this.count = 1;
  this.MAXFRAMECOUNT = 10;
};

Frames.prototype.increaseCount = function() {
  if (this.count < this.MAXFRAMECOUNT) {
    return this.count += 1;
  }
};
