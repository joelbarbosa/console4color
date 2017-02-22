console4color Color Console
===========================

Logger to console.log color like info, warn, error or anything in the Node console
==================================================================================

## Installation

  `npm install console4color`

## Usage

    const Logger = require('console4color').Logger;
    
    Logger.info('info message');
    Logger.warn('warn message');
    Logger.error('error message');
    Logger.log('log message');
    Logger.log('myApp', 'message to log');
    
  
  
	Output should be:
	INFO: info message // with cyan color
	WARN: warn message // with yellow color
	ERROR: error message // red color
	log message // console color
	myApp: message to log // console color

## Tests

  `npm test`

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.