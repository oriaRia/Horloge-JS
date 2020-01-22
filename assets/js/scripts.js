var d    = new Date();
var time = d.getSeconds() + 60 * d.getMinutes() + 3600 * d.getHours();

window.onload = function()
   {
    //   if(document.getElementsByTagName('body')[0].style.MozTransform == ''
    //      || document.getElementsByTagName('body')[0].style.WebkitTransform == ''
    //      || document.getElementsByTagName('body')[0].style.OTransform == ''
    //      || document.getElementsByTagName('body')[0].style.OTransform
    //      || document.getElementsByTagName('body')[0].style.msTransform == ''
    //      || document.getElementsByTagName('body')[0].style.transform == '')
    //   {
         var seconde = document.getElementById('seconde');
            seconde.setAttribute('src'  , './assets/image/seconde.png');

         var minute = document.getElementById('minute');
            minute.setAttribute('src'  , './assets/image/minute.png');
            minute.setAttribute('class', 'aiguilles');
            minute.setAttribute('alt'  , 'aiguille des minutes');


         var heure = document.getElementById('heure');
            heure.setAttribute('src'  , './assets/image/heure.png');
            heure.setAttribute('class', 'aiguilles');
            heure.setAttribute('alt'  , 'aiguille des heures');


         var horloge = document.getElementById('horloge');
            horloge.appendChild(seconde);
            horloge.appendChild(minute);
            horloge.appendChild(heure);
            horloge.setAttribute('style', 'background: url(./assets/image/cadran.png) ;');

         var d    = new Date();
         var time = d.getSeconds() + 60 * d.getMinutes() + 3600 * d.getHours();

         function aiguilles()
{
   aigS.style.MozTransform    =
   aigS.style.WebkitTransform =
   aigS.style.OTransform      =
   aigS.style.msTransform     =
   aigS.style.transform       = 'rotate(' + (time * 6) + 'deg)';
   aigM.style.MozTransform    =
   aigM.style.WebkitTransform =
   aigM.style.OTransform      =
   aigM.style.msTransform     =
   aigM.style.transform       = 'rotate(' + Math.round(time / 10) + 'deg)';
   aigH.style.MozTransform    =
   aigH.style.WebkitTransform =
   aigH.style.OTransform      =
   aigH.style.msTransform     =
   aigH.style.transform       = 'rotate(' + Math.round(time / 120) + 'deg)';
}

         seconde.style.MozTransform    = 'rotate(' + (time * 6) + 'deg)';
         seconde.style.WebkitTransform = 'rotate(' + (time * 6) + 'deg)';
         seconde.style.OTransform      = 'rotate(' + (time * 6) + 'deg)';
         seconde.style.msTransform     = 'rotate(' + (time * 6) + 'deg)';
         seconde.style.transform       = 'rotate(' + (time * 6) + 'deg)';
         minute.style.MozTransform    = 'rotate(' + Math.round(time / 10) + 'deg)';
         minute.style.WebkitTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
         minute.style.OTransform      = 'rotate(' + Math.round(time / 10) + 'deg)';
         minute.style.msTransform     = 'rotate(' + Math.round(time / 10) + 'deg)';
         minute.style.transform       = 'rotate(' + Math.round(time / 10) + 'deg)';
         heure.style.MozTransform    = 'rotate(' + Math.round(time / 120) + 'deg)';
         heure.style.WebkitTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
         heure.style.OTransform      = 'rotate(' + Math.round(time / 120) + 'deg)';
         heure.style.msTransform     = 'rotate(' + Math.round(time / 120) + 'deg)';
         heure.style.transform       = 'rotate(' + Math.round(time / 120) + 'deg)';

         setInterval(function() {
            time++;
            seconde.style.MozTransform    = 'rotate(' + (time * 6) + 'deg)';
            seconde.style.WebkitTransform = 'rotate(' + (time * 6) + 'deg)';
            seconde.style.OTransform      = 'rotate(' + (time * 6) + 'deg)';
            seconde.style.msTransform     = 'rotate(' + (time * 6) + 'deg)';
            seconde.style.transform       = 'rotate(' + (time * 6) + 'deg)';
            minute.style.MozTransform    = 'rotate(' + Math.round(time / 10) + 'deg)';
            minute.style.WebkitTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
            minute.style.OTransform      = 'rotate(' + Math.round(time / 10) + 'deg)';
            minute.style.msTransform     = 'rotate(' + Math.round(time / 10) + 'deg)';
            minute.style.transform       = 'rotate(' + Math.round(time / 10) + 'deg)';
            heure.style.MozTransform    = 'rotate(' + Math.round(time / 120) + 'deg)';
            heure.style.WebkitTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
            heure.style.OTransform      = 'rotate(' + Math.round(time / 120) + 'deg)';
            heure.style.msTransform     = 'rotate(' + Math.round(time / 120) + 'deg)';
            heure.style.transform       = 'rotate(' + Math.round(time / 120) + 'deg)';
         }, 1000);
      }
