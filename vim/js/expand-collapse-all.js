function expand_all() {
 details = document.getElementsByTagName("details");
 for (i in details) details[i].open = true;
}

function collapse_all() {
 details = document.getElementsByTagName("details");
 for (i in details) details[i].open = false;
}
