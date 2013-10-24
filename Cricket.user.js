// ==UserScript==
// @name        CricketUpFucker
// @namespace   colmprunty.cricketfucker
// @include     http://www.espncricinfo.com/*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js
// ==/UserScript==

$("p").each(function(){
var text = $(this);
text.html(text.html().replace("South Africa", "South Fucking Africa"));
});