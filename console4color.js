'use strict';
const Color = require('./lib/color');
let color = new Color();

let Logger = {
  
  info:((message) => {  	
    console.log(color.CYAN, "INFO: " + message);
    return message;
  }),
  
  warn:((message) => {
    console.log(color.YELLOW, "WARN: " + message);
    return message;	
  }),
  
  error:((message) => {
    console.log(color.RED, "ERROR: " + message);
    return message;  
  }),

  log:((type, message) => {    
    
    let _message;
    
    if(message == undefined) {
      message = type;
      type = '';           
    }

    if(type != '') {
      _message = type + ": " + message;
    } else {
      _message = message;	
    }

    console.log(_message);
    return message;   
  })
};

module.exports.Logger = Logger;