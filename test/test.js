const expect = require('chai').expect;
const Logger = require('../console4color').Logger;
const Color = require('../lib/color');

describe('#Logger', function() {
  
  it('#info should print info colored', function() {  	    
    expect(Logger.info('info message log')).to.equals("info message log");    
  });

  it('#warn should print warn colored', function() {    
    expect(Logger.warn('warn message log')).to.equals("warn message log");
  });

  it('#error should print error colored', function() {    
    expect(Logger.error('error message log')).to.equals("error message log");
  });

  it('#log type, message should print log with info type', function() {    
    expect(Logger.log('App', 'message to log app')).to.equals("message to log app");
  });

  it('#log should print log just', function() {    
    expect(Logger.log('just a log message')).to.equals("just a log message");
  });  
  
});

describe('#Color', function() {
  
  before(function() {
    this.color = new Color();    
  });

  it('#getCyan should info equals color blue \x1b[36m%s\x1b[0m', function() {
    let result = this.color.getCyan();    
    expect(result).to.equals("\x1b[36m%s\x1b[0m");
  });

  it('#getYellow, should warn equals color yellow \x1b[33m', function() {
    let result = this.color.getYellow();
    expect(result).to.equals("\x1b[33m");
  });

  it('#getRed() should error equals color red', function() {
    let result = this.color.getRed();
    expect(result).to.equals("\x1b[31m");
  });
  
});