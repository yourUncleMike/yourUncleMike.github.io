// ==UserScript==
// @name        proof-of-concept
// @namespace   yourUncleMike
// @include     file:///home/md_clay/yourUncleMike.github.io/*.html
// @include     https://yourunclemike.github.io/*.html
// @version     2017.04.30.2207
// ==/UserScript==
var version  = '2017.04.30.2207'

//////////////////////////////////////////////////
//                                              //
// IF YOU ARE SEEING THIS MESSAGE, YOU NEED TO: //
// 1. Install Greasemonkey 3.11 or higher; and  //
// 2. Enable Greasemonkey                       //
//                                              //
//////////////////////////////////////////////////

var readyState = document.readyState;

documentReadyState_field = document.getElementById("document.readyState");
if (documentReadyState_field) {
  if (readyState) {
    documentReadyState_field.value = readyState;
  } else {
    documentReadyState_field.value = typeof readyState;
  }
}

greasemonkeyVersion_field = document.getElementById("GM_info.version");
if (greasemonkeyVersion_field) {
  greasemonkeyVersion_field.value = GM_info.version;
}

userscriptVersion_field = document.getElementById("GM_info.script.version");
if (userscriptVersion_field) {
  userscriptVersion_field.value = GM_info.script.version;
}

listValues_field = document.getElementById("GM_listValues");
if (listValues_field) {
  listValues_field.value = typeof GM_listValues;
}

xmlhttpRequest_field = document.getElementById("GM_xmlhttpRequest");
if (xmlhttpRequest_field) {
  xmlhttpRequest_field.value = typeof GM_xmlhttpRequest;
}
