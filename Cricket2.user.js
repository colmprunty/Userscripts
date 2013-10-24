// ==UserScript==
// @name         CricketUpFucker2
// @namespace    colmprunty.cricketfucker2
// @include      http://www.espncricinfo.com/*
// @author       Colm Prunty
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {
  // Note, jQ replaces $ to avoid conflicts.
  jQ("p").each(function(){
	var text = jQ(this);
text.html(text.html().replace("South Africa", "South Fucking Africa"));
});
}

// load jQuery and execute the main function
addJQuery(main);