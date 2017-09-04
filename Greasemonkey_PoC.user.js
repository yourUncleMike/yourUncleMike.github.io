// ==UserScript==
// @name        proof-of-concept
// @namespace   yourUncleMike
// @include     file:///home/md_clay/yourUncleMike.github.io/*.html
// @include     https://yourunclemike.github.io/*.html
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_listValues
// @grant       GM_xmlhttpRequest
// @version     2017.09.04.1220
// ==/UserScript==
var version  = '2017.09.04.1220';

//////////////////////////////////////////////////
//                                              //
// IF YOU ARE SEEING THIS MESSAGE, YOU NEED TO: //
// 1. Install Greasemonkey 3.11 or higher; and  //
// 2. Enable Greasemonkey                       //
//                                              //
//////////////////////////////////////////////////

var readyState = document.readyState;

function pad2(nval) { return ("0000" + nval).slice(-2) };

var xhr = {
  method: "GET",
  url: "https://yourunclemike.github.io/PoC.js",
  onload: function(response) {
    console.debug("GM_xmlhttpRequest executed");
    console.debug(response.responseText);
  }
};
GM_xmlhttpRequest(xhr);

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

last_update_field = document.getElementById("localStorage.last_update");
if (last_update_field && (typeof localStorage.last_update) != "undefined") {
  d = new Date(parseInt(localStorage.last_update));
  year = d.getFullYear();
  mon = pad2(d.getMonth() + 1);
  day = pad2(d.getDate());
  hrs = pad2(d.getHours());
  mins = pad2(d.getMinutes());
  last_update_field.value = "" + year + "." + mon + "." + day + "." + hrs + mins;
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
