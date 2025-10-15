const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        // Replace % with /100 and handle square root
        let expression = display.value.replace("%", "/100");
        expression = expression.replace("√", "Math.sqrt");
        display.value = eval(expression);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});

// Keyboard input support
document.addEventListener("keydown", (e) => {
  if ((e.key >= 0 && e.key <= 9) || "+-*/.%".includes(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    try {
      let expression = display.value.replace("%", "/100");
      expression = expression.replace("√", "Math.sqrt");
      display.value = eval(expression);
    } catch {
      display.value = "Error";
    }
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    display.value = "";
  }
});
