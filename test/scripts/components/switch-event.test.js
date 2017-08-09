'use strict';

var _ = require('macaca-utils');
var assert = require('chai').assert
var wd = require('weex-wd')
var path = require('path');
var os = require('os');
var util = require("../util.js");

var switchTag = 'XCUIElementTypeSwitch';

var goal = 'switch-event';
var interval = util.getGETActionWaitTimeMills();
describe('weex '+goal+' test', function () {
  this.timeout(util.getTimeoutMills());
  var driver = util.createDriver(wd);

  before(function () {
    return util.init(driver)
      .get(util.getPage('/components/'+goal+'.js'))
      .waitForElementByName(goal, interval, 2000)
  });

  after(function () {
    return util.quit(driver);
  })

  it('#1 '+goal + ' event', () => {
    return driver
      .waitForElementByClassName(switchTag, interval, 2000)
      .click()
      .waitForElementByName('change response:true', interval, 2000)

      .waitForElementByClassName(switchTag, interval, 2000)
      .click()
      .waitForElementByName('change response:false', interval, 2000)
  })
});