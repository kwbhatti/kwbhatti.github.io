function goToIndicator(){
    var link = document.getElementById("indicatorOptions").value;
    location.href= link;
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}