const divEl = document.getElementById('Display');
divEl.value = '0';

// Replace symbols with JS equivalents
function cleanExpression(expression) {
    return expression.replace(/÷/g, '/').replace(/×/g, '*');
}

// Check if it's an operator
function isOperator(char) {
    return ['+', '-', '*', '/', '.', '×', '÷', '%'].includes(char);
}

// Add value
function setvalue(value) {
    if (divEl.value === '0' && !isOperator(value)) {
        divEl.value = value;
    } else {
        divEl.value += value;
    }
}

// Clear display
function clearDisplay() {
    divEl.value = '0';
}

// Delete last character
function deleteLast() {
    divEl.value = divEl.value.slice(0, -1);
    if (divEl.value === '' || divEl.value === '-') {
        divEl.value = '0';
    }
}

// Calculate expression
function calculate() {
    try {
        const cleaned = cleanExpression(divEl.value);
        divEl.value = eval(cleaned).toString();
    } catch {
        alert('Invalid Expression');
        divEl.value = '0';
    }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        setvalue(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    } else if (key === 'Delete' || key === 'Escape') {
        event.preventDefault();
        clearDisplay();
    }
});
