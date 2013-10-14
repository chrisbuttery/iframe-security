/**
 * iframe-security
 * if the site location isnt top, hide the html
 * otherwise display it
 */
module.exports = function(){
  var el = document.getElementsByTagName('html')[0];
  el.classList.add('is-hidden');

  if (window.self === window.top) {
    el.classList.remove('is-hidden');
  } else {
    window.top.location = window.self.location;
  }
};