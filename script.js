const appendToDisplay = (value) => {
  document.calculatorForm.display.value += value;
}

const clearDisplay = () => {
  document.calculatorForm.display.value = '';
}

const calculateResult = () => {
  try {
      document.calculatorForm.display.value = eval(document.calculatorForm.display.value);
  } catch (error) {
      document.calculatorForm.display.value = 'Error';
  }
}

const darkMode = () => {
  let element = document.body;
  element.className = "dark-mode";
}

const lightMode = () => {
  let element = document.body;
  element.className = "light-mode";
}
