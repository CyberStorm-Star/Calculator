
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function deleteLastCharacter() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
  }

  function calculateResult() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  }