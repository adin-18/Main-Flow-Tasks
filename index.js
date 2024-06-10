let expression = '';
let operand = '';
let operator = '';
let history = [];

function appendValue(value) {
    operand += value;
    updateDisplay();
}

function appendOperation(op) {
    if (operand !== '') {
        if (expression !== '') {
            expression += operand;
            calculate();
        }
        operator = op;
        expression += operand + op;
        operand = '';
    }
}

function clearDisplay() {
    expression = '';
    operand = '';
    operator = '';
    updateDisplay();
}

function deleteChar() {
    operand = operand.slice(0, -1);
    updateDisplay();
}

function calculate() {
    expression += operand;
    try {
        const result = eval(expression);
        saveToHistory(expression + ' = ' + result);
        operand = result.toString();
        expression = '';
        operator = '';
    } catch (error) {
        operand = 'Error';
        expression = '';
        operator = '';
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('result');
    display.value = operand || expression;
}

function toggleOperatorHighlight(button) {
    const operators = document.querySelectorAll('.operator');
    operators.forEach(op => op.classList.remove('highlighted'));
    button.classList.add('highlighted');
}

function showHistory() {
    const historyPanel = document.getElementById('historyPanel');
    if (historyPanel.style.display === 'none') {
        historyPanel.style.display = 'block';
        updateHistoryPanel();
    } else {
        historyPanel.style.display = 'none';
    }
}

function saveToHistory(historyItem) {
    history.push(historyItem);
}

function updateHistoryPanel() {
    const historyPanel = document.getElementById('historyPanel');
    historyPanel.innerHTML = '';
    for (let i = 0; i < history.length; i++) {
        const historyItem = document.createElement('div');
        historyItem.textContent = history[i];
        historyPanel.appendChild(historyItem);
    }
}
