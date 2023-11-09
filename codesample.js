
/**This code is designed for a popup on a Drupal site, specifically tailored to be visible only to members from a specific region. 
It utilizes JavaScript to interact with the Abstract IP Geolocation API, checking the user's region and displaying the popup accordingly.
 Additionally, it manages cookies to control when the popup should be shown or hidden.**/

(function ($) {
  function setCookie(cname, cvalue) {
   const d = new Date();
   // d.setTime(d.getTime() + (exdays*24*60*60*1000));
   let expires = "expires="+ d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + "path=/";
 }


 function getCookie(cname) {
   let name = cname + "=";
   let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(';');
   for(let i = 0; i <ca.length; i++) {
 	let c = ca[i];
 	while (c.charAt(0) == ' ') {
   	c = c.substring(1);
 	}
 	if (c.indexOf(name) == 0) {
   	return c.substring(name.length, c.length);
 	}
   }
   return "";
 }


  $.getJSON("<api>", function (data) {
   console.log(data.ip_address);
   console.log(data.country_code);
   console.log(data.region_iso_code);


   if (data.region_iso_code != "<iso_code>") {
    
 	setCookie("darkModePopupClosed","yes",)
    
   }else {
 	jQuery(".site-popup-background").addClass("sitepopup-open");
   }
   if (getCookie("darkModePopupClosed") == "yes") {
 	jQuery(".site-popup-background").removeClass("sitepopup-open");
 	jQuery(".site-popup-background").addClass("sitepopup-closed");
   }
 	jQuery('.site-popup-close').on('click', function() {
    
 	setCookie("darkModePopupClosed","yes",)
 	jQuery(".site-popup-background").removeClass("sitepopup-open");
 	jQuery(".site-popup-background").addClass("sitepopup-closed");
   });
	var popupSitePath = window.location.href;
   var popupLink = jQuery('.site-popup-text .button').attr('href');
	if (popupLink == popupSitePath){
 	jQuery(".site-popup-background").addClass("sitepopup-closed");
   }
  });






