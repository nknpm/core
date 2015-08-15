"use strict";

var Clock = {
  elapsed: function() {
    var currentTime = new Date().getTime();
    return currentTime - this.startTime;
  },
  start: function() {
    this.startTime = new Date().getTime();
    return this;
  },
  startTime: undefined
};

module.exports = Clock;
