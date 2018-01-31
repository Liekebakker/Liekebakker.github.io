
/*Wanneer je klikt, roep je de functie aan */
window.addEventListener('DOMContentLoaded', function() {
   setOnclick();
}, true);

/*Wanneer je op hartje klikt speelt de animatie zich af uit de css en gaat het hartje pulsen*/
function setOnclick() {
  var hart = document.querySelector('.hartje');
  if(hart) {
    hart.addEventListener('click', restartAnimation);
  }
    
  /*code van aanbevolen microinteractie, wanneer je klikt speelt de ZoomIn animatie af*/  
  const aanbevolen = document.querySelector('.aanbevolen')
  if(aanbevolen) {
     aanbevolen.addEventListener('click', restartAnimation);
  }
  /*code van beukeringen.p*/    
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
