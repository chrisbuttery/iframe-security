/**
 * iframe-security
 * if the site location isnt top, hide the html
 * otherwise display it
 */
module.exports = function(){
  if (window.self === window.top) {
    var el = document.getElementsByTagName('html')[0];
    el.classList.add('block');
  } else {
    window.top.location = window.self.location;
  }
};