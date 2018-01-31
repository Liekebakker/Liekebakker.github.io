window.addEventListener('DOMContentLoaded', function() {
   setOnclick();
}, true);

function setOnclick() {
  var hart = document.querySelector('.hartje');
  if(hart) {
    hart.addEventListener('click', restartAnimation);
  }
    
    
  const aanbevolen = document.querySelector('.aanbevolen')
  if(aanbevolen) {
     aanbevolen.addEventListener('click', restartAnimation);
  }
  const arrow = document.querySelector('.arrow');
  if(arrow) {
    arrow.addEventListener('click', restartAnimation);
  } 
}



function restartAnimation() {
  var elm = this;
  var newone = elm.cloneNode(true);
  elm.parentNode.replaceChild(newone, elm);
  setOnclick();
};
