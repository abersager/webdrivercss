'use strict';

module.exports = function(done) {
  if (!this.preScreenshot) {
    done();
  }

  this.instance.timeoutsAsyncScript(10000);
  this.instance.executeAsync(this.preScreenshot, function () {
    done();
  });
};
