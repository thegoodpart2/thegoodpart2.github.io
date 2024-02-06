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

const deleteLastCharacter = () => {
  document.calculatorForm.display.value = document.calculatorForm.display.value.slice(0, -1);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    calculateResult();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    deleteLastCharacter();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'c') {
    clearDisplay();
  }
});

const darkMode = () => {
  let element = document.body;
  element.className = "dark-mode";
}

const lightMode = () => {
  let element = document.body;
  element.className = "light-mode";
}
