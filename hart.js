window.addEventListener('DOMContentLoaded', function() {
   setOnclick();
}, true);

function setOnclick() {
  document.querySelector('.hartje').addEventListener('click', restartAnimation);
}

function restartAnimation() {
  var elm = this;
  var newone = elm.cloneNode(true);
  elm.parentNode.replaceChild(newone, elm);
  setOnclick();
};

