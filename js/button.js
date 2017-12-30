function button_reveal(button) {
  var span = button.nextElementSibling;
  var div = span.nextElementSibling;
  div.hidden = button.textContent[0] == "+";
  span.style.fontWeight = div.hidden ? "bold" : "normal";
}

function button_toggle(button) {
  button.textContent = (button.textContent[0] == "-" ? "+" : "-") + button.textContent.slice(1);
  button_reveal(button);
}

function buttons_init() {
  buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++)
    button_reveal(buttons[i])
}
