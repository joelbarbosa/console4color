'use strict'

class Color {

  constructor() {   
    this.CYAN = "\x1b[36m%s\x1b[0m";
    this.YELLOW = "\x1b[33m";
    this.RED = "\x1b[31m";
  }
  
  getCyan() {
    // console.log(this.CYAN, "getBlue()");
    return this.CYAN;
  }

  getYellow() {
    // console.log(this.YELLOW, "getYellow()");
    return this.YELLOW;
  }

  getRed() {
  	// console.log(this.RED, "getRed()");
  	return this.RED;
  }

}

module.exports = Color;