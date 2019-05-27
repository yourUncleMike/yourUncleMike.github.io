function reveal_next(button, hide=false, disable=true) {
  e = button.parentElement;
  console.log("parent:" + e);
  while (! e.hidden) 
    e = e.nextElementSibling;
  e.hidden = false;
  if (hide) button.hidden = true;
  if (disable) button.disabled = true;
}
