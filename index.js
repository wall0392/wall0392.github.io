/* Got from https://www.w3schools.com/howto/howto_js_sticky_header.asp */

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/* Got from https://css-tricks.com/convert-menu-to-dropdown/ 
Adapted with some assistance from Mark Simonyi (boyfriend)
*/ 

// Create the dropdown base
//$("<select />").appendTo("#main");

// Create default option "Go to..."
$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "MENU"
}).appendTo("#main select");

// Populate dropdown with menu items
$("#main ul li a").each(function() {
 var el = $(this);
 $("<option />", {
     "value"   : el.attr("href"),
     "text"    : el.text()
 }).appendTo("#main select");
});

$("#main select").change(function() {
  window.location = $(this).find("option:selected").val();
});