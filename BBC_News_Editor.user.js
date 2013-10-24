// ==UserScript==
// @name        BBC News Editor
// @namespace   colmprunty.bbcnews
// @description Edit the main headline of the BBC News page to be whatever you like
// @include     http://www.bbc.co.uk/news/
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js
// ==/UserScript==

var headlineText = "This is the text of the headlines";
var theHeadlineIsALinkToThis = "http://www.google.co.uk";
var headlineSubText = "This is where the text that goes below your headline lives. It should be about forty words to fill up the paragraph in a realistic way. Like this sentence is, isn't it amazing! No line breaks in the .js file please.";

var sublink1 = "http://www.google.co.uk";
var sublink2 = "http://www.google.co.uk";
var sublink3 = "http://www.google.co.uk";
var sublink4 = "http://www.google.co.uk";

var sublinkText1 = "<a class='story' href = " + sublink1 + "> First on the left</a>";
var sublinkText2 = "<a class='story' href = " + sublink2 + "> First on the right</a>";
var sublinkText3 = "<a class='story' href = " + sublink3 + "> Second on the left</a>";
var sublinkText4 = "<a class='story' href = " + sublink4 + "> Second on the right</a>";

$(".top-story-header ").html("<a class='story' href=" + theHeadlineIsALinkToThis + ">" + headlineText + "</p>");
$("#top-story > p").html("<p>" + headlineSubText + "</p>");
$("#top-story > .see-also").html("<li class='column1'>" + sublinkText1 + "</li><li class='column2'>" + sublinkText2 + "</li><li class='column1'>" 
+ sublinkText3 + "</li><li class='column2'>" + sublinkText4 + "</li>");