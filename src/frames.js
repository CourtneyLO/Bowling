'use-strict'

function Frames() {
  this.count = 1;
};

Frames.prototype.increaseCount = function() {
  if (this.count < 10) {
    return this.count += 1;
  }

};
