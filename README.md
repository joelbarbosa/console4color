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
	<p style='color:cyan'>INFO: info message</p>
	<p style='color:yellow'>WARN: warn message</p>
	<p style='color:red'>ERROR: error message</p>  
	<p>log message</p>
	<p>myApp: message to log</p>  

## Tests

  `npm test`

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.