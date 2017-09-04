// ==UserScript==
// @name        proof-of-concept
// @namespace   yourUncleMike
// @include     file:///home/md_clay/yourUncleMike.github.io/*.html
// @include     https://yourunclemike.github.io/*.html
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_listValues
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceText
// @resource    PoC file:///home/md_clay/yourUncleMike.github.io/PoC.js
// @version     2017.09.03.1915
// ==/UserScript==
var version  = '2017.09.03.1915'

var PoC_source = GM_getResourceText("PoC");

//////////////////////////////////////////////////
//                                              //
// IF YOU ARE SEEING THIS MESSAGE, YOU NEED TO: //
// 1. Install Greasemonkey 3.11 or higher; and  //
// 2. Enable Greasemonkey                       //
//                                              //
//////////////////////////////////////////////////

var readyState = document.readyState;

console.debug("PoC resource: " + PoC_source);
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
  GM_setValue("scriptVer", GM_info.script.version);
}

getValue_field = document.getElementById("GM_getValue");
if (getValue_field) {
  getValue_field.value = typeof GM_getValue;
}

setValue_field = document.getElementById("GM_setValue");
if (setValue_field) {
  setValue_field.value = typeof GM_setValue;
}

listValues_field = document.getElementById("GM_listValues");
if (listValues_field) {
  listValues_field.value = typeof GM_listValues;
  val_list = [];
  for each (var name in GM_listValues()) {
    val_list.push(name + "=" + GM_getValue(name));
  };
  listValues_field.value = "[" + val_list.join(", ") + "]";
}

xmlhttpRequest_field = document.getElementById("GM_xmlhttpRequest");
if (xmlhttpRequest_field) {
  xmlhttpRequest_field.value = typeof GM_xmlhttpRequest;
}

GM_setValue("foo", "bar");
var foo = GM_getValue("foo");
