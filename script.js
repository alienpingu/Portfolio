// Fix "not collapsing nav" in mobile view
const nDd = $('#navbarNavDropdown');
$('.nav-link').click(() => (nDd.hasClass('show')) ? nDd.removeClass('show') : null)
// Hide and Show navbar when scrolling only for mobile
var windowsize = $(window).width();
$(window).resize(function() {
  var windowsize = $(window).width();
});
if (windowsize < 600) {
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	  var currentScrollPos = window.pageYOffset;
	  if (prevScrollpos > currentScrollPos) {
	    document.getElementById("navbar").style.top = "0";
	  } else {
	    document.getElementById("navbar").style.top = "-56px";
	  }
	  prevScrollpos = currentScrollPos;
	} 
}