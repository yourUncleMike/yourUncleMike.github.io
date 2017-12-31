function button_reveal(button) {
  if (button.textContent[0] == "+") {
    var next_elem_1 = button.nextElementSibling;
    var next_elem_2 = next_elem_1.nextElementSibling;
    next_elem_2.hidden = true;
    next_elem_1.style.fontWeight = "bold";
  } else if (button.textContent[0] == "-") {
    var next_elem_1 = button.nextElementSibling;
    var next_elem_2 = next_elem_1.nextElementSibling;
    next_elem_2.hidden = false;
    next_elem_1.style.fontWeight = "normal";
  } else if (button.textContent == "less") {
    var prev_elem_1 = button.previousElementSibling;
    prev_elem_1.hidden = false;
  } else if (button.textContent == "more" || button.textContent == "..." ) {
    var prev_elem_1 = button.previousElementSibling;
    prev_elem_1.hidden = true;
  }
}

function button_toggle(button) {
  if      (button.textContent[0] == "+") {
           button.textContent = "-" + button.textContent.slice(1);
  } else if (button.textContent[0] == "-") {
           button.textContent = "+" + button.textContent.slice(1);
  } else if (button.textContent == "less") {
           button.textContent = "more";
  } else if (button.textContent == "more") {
           button.textContent = "less";
  } else if (button.textContent == "...") {
           button.textContent = "less";
           button.hidden = true;
  };
  button_reveal(button);
}

function buttons_init() {
  buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++)
    button_reveal(buttons[i])
}
