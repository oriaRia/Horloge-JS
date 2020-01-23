var d = new Date();
var time = d.getSeconds() + 60 * d.getMinutes() + 3600 * d.getHours();

window.onload = function () {

   var seconde = document.getElementById('seconde');
   seconde.setAttribute('src', './assets/image/seconde.png');

   var minute = document.getElementById('minute');
   minute.setAttribute('src', './assets/image/minute.png');

   var heure = document.getElementById('heure');
   heure.setAttribute('src', './assets/image/heure.png');

   var horloge = document.getElementById('horloge');
   horloge.appendChild(seconde);
   horloge.appendChild(minute);
   horloge.appendChild(heure);
   horloge.setAttribute('style', 'background: url(./assets/image/cadran.png) ;');

   var d = new Date();
   var time = d.getSeconds() + 60 * d.getMinutes() + 3600 * d.getHours();

   function aiguilles() {
      seconde.style.MozTransform =
         seconde.style.WebkitTransform =
         seconde.style.OTransform =
         seconde.style.msTransform =
         seconde.style.transform = 'rotate(' + (time * 6) + 'deg)';
      minute.style.MozTransform =
         minute.style.WebkitTransform =
         minute.style.OTransform =
         minute.style.msTransform =
         minute.style.transform = 'rotate(' + Math.round(time / 10) + 'deg)';
      heure.style.MozTransform =
         heure.style.WebkitTransform =
         heure.style.OTransform =
         heure.style.msTransform =
         heure.style.transform = 'rotate(' + Math.round(time / 120) + 'deg)';
   }

   seconde.style.MozTransform = 'rotate(' + (time * 6) + 'deg)';
   seconde.style.WebkitTransform = 'rotate(' + (time * 6) + 'deg)';
   seconde.style.OTransform = 'rotate(' + (time * 6) + 'deg)';
   seconde.style.msTransform = 'rotate(' + (time * 6) + 'deg)';
   seconde.style.transform = 'rotate(' + (time * 6) + 'deg)';
   minute.style.MozTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
   minute.style.WebkitTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
   minute.style.OTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
   minute.style.msTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
   minute.style.transform = 'rotate(' + Math.round(time / 10) + 'deg)';
   heure.style.MozTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
   heure.style.WebkitTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
   heure.style.OTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
   heure.style.msTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
   heure.style.transform = 'rotate(' + Math.round(time / 120) + 'deg)';

   setInterval(function () {
      time++;
      seconde.style.MozTransform = 'rotate(' + (time * 6) + 'deg)';
      seconde.style.WebkitTransform = 'rotate(' + (time * 6) + 'deg)';
      seconde.style.OTransform = 'rotate(' + (time * 6) + 'deg)';
      seconde.style.msTransform = 'rotate(' + (time * 6) + 'deg)';
      seconde.style.transform = 'rotate(' + (time * 6) + 'deg)';
      minute.style.MozTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
      minute.style.WebkitTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
      minute.style.OTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
      minute.style.msTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
      minute.style.transform = 'rotate(' + Math.round(time / 10) + 'deg)';
      heure.style.MozTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
      heure.style.WebkitTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
      heure.style.OTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
      heure.style.msTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
      heure.style.transform = 'rotate(' + Math.round(time / 120) + 'deg)';
   }, 1000);
}
setInterval(function () {
   d = new Date();
   time = d.getSeconds() + 60 * d.getMinutes() + 3600 * d.getHours();
}, 60000);