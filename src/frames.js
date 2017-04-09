'use-strict'

function Frames() {
  this.count = 0;
};

Frames.prototype.increaseCount = function() {
  return this.count += 1;
};
