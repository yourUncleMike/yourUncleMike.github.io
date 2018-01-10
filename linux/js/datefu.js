function datefu_init() {
  d = new Date(); y = d.getFullYear(); m = d.getMonth() + 1;
  d = d.getDate();
  d = y + '-' + (m > 9 ? '' : '0') + m + '-' + (d > 9 ? '' : '0') + d;
  e = document.getElementsByTagName('th');
  for (i = 0; i < e.length; i++) 
    e[i].innerHTML = e[i].innerHTML.split('.OLD').join('.'+d);
};
