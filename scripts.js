document.addEventListener("DOMContentLoaded", function() {
    const calculatorForm = document.forms.calculator;
    const display = calculatorForm.display;
  
    const buttons = document.querySelectorAll(".button");
  
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.value;
            if (value === "=") {
                display.value = eval(display.value);
            } else if (value === "C") {
                display.value = "";
            } else {
                display.value += value;
            }
        });
    });
});
