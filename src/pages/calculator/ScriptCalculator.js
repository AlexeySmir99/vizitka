class Calculator {
    constructor(num1Id, num2Id, resultId) {
        this.num1Element = document.getElementById(num1Id);
        this.num2Element = document.getElementById(num2Id);
        this.resultElement = document.getElementById(resultId);
        this.currentInput = null;
                
                
        this.initNumberButtons();
        this.initOperationButtons();
        this.initClearButton();
        this.initInputFields();
    }

            
    initInputFields() {
        this.num1Element.addEventListener('focus', () => this.currentInput = this.num1Element);
        this.num2Element.addEventListener('focus', () => this.currentInput = this.num2Element);
                
        this.currentInput = this.num1Element;
        this.num1Element.focus();
    }

    initNumberButtons() {
        document.querySelectorAll('.num-btn').forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;
                this.appendToCurrentInput(value);
            });
        });
    }

    initOperationButtons() {
        document.getElementById('add').addEventListener('click', () => this.add());
        document.getElementById('subtract').addEventListener('click', () => this.subtract());
        document.getElementById('multiply').addEventListener('click', () => this.multiply());
        document.getElementById('divide').addEventListener('click', () => this.divide());
    }

    initClearButton() {
        document.getElementById('clear').addEventListener('click', () => {
            if (this.currentInput) {
                this.currentInput.value = '';
            }
        });
    }

   appendToCurrentInput(value) {
        if (!this.currentInput) return;
        
        const currentValue = this.currentInput.value;
        
        
        if (value === '.') {
            if (currentValue.includes('.')) return; 
            
            if (currentValue === '' || currentValue === '-') {
                this.currentInput.value = currentValue + '0.'; 
            } else {
                this.currentInput.value = currentValue + '.';
            }
            return;
        }
        
        
        if (/^\d$/.test(value)) {
            if (currentValue === '0') {
                this.currentInput.value = value; 
            } else if (currentValue === '-0') {
                this.currentInput.value = '-' + value; 
            } else {
                this.currentInput.value += value;
            }
        }
    }

    getNumbers() {
        const num1 = parseFloat(this.num1Element.value) || 0;
        const num2 = parseFloat(this.num2Element.value) || 0;
        return { num1, num2 };
    }

    setResult(value) {
        this.resultElement.value = value;
    }

    add() {
        const { num1, num2 } = this.getNumbers();
        this.setResult(num1 + num2);
    }

    subtract() {
        const { num1, num2 } = this.getNumbers();
        this.setResult(num1 - num2);
    }

    multiply() {
        const { num1, num2 } = this.getNumbers();
        this.setResult(num1 * num2);
    }

    divide() {
        const { num1, num2 } = this.getNumbers();
        if (num2 === 0) {
            this.setResult("Ошибка: деление на 0");
        } else {
            this.setResult(num1 / num2);
        }
    }
}


const calculator = new Calculator('num1', 'num2', 'result');
    