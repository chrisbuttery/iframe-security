/**
 * iframe-security
 * if the window doesnt match top, make sure it does
 */
module.exports = function(){
  if (window.self != window.top) {
    window.top.location = window.self.location;
  }
};