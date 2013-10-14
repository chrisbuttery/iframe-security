module.exports = function iframeSecurity(){
  if (window.self === window.top) {
    var el = document.getElementsByTagName('body')[0];
    el.classList.add('block');
  } else {
    window.top.location = window.self.location;
  }
};