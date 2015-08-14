"use strict";

var Timer = {
  elapsed: function() {
    return this.endTime - this.startTime;
  },
  end: function() {
    this.endTime = new Date().getTime();
    return this;
  },
  start: function() {
    this.startTime = new Date().getTime();
    return this;
  },
  startTime: undefined,
  endTime: undefined
};

module.exports = Timer;
