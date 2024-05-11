let displayValue = '';

function appendCharacter(char) {
    displayValue += char;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = ''; 
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = ''; 
    }
}
