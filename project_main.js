//time and date
function display_c() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("display_ct()", refresh);
}

function display_ct() {
  var x = new Date();
  document.getElementById("ct").innerHTML = x;
  display_c();
}

// hide and show offers
$(document).ready(function () {
  $("#hide").click(function () {
    $("div").hide(1000); //remove time for quick response
  });
  $("#show").click(function () {
    $("div").show(1000); //remove time for quick response
  });
});


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
