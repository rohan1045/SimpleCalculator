let calculator = {
    e: {
        number_keys: document.querySelectorAll('.number-btn'),
        operators: document.querySelectorAll('.operator-btn'),
        display: document.getElementById('calc-display'),
        clear: document.getElementById('c'),
        delete: document.getElementById('del'),
    },

    operators: [],

    checkEmpty: () => {
        if (calculator.e.display.innerHTML === "") {
            return true;
        } else {
            return false;
        }
    },

    checkNext: () => {
        return calculator.e.display.innerHTML.slice(-1);
    },

    checkOperators: (lastChar) => {
        for (let o of calculator.operators) {
            if (lastChar === o) {
                return true;
            } else {
                continue;
            }
        }
        return false;
    },

    checkIfAnyOperator: () => {
        for (let o of calculator.operators) {
            if (calculator.e.display.innerHTML.includes(o)) {
                return true;
            } else {
                continue;
            }
        }
    },

    checkPeriod: () => {
        if (calculator.e.display.innerHTML.includes('.')) {
            return true;
        } else {
            return false;
        }
    }
};

calculator.addListeners = () => {
    
    document.addEventListener("keypress", function(keyevent) {
        const KEY_ZERO = 48, KEY_ONE = 49, KEY_TWO = 50, KEY_THREE = 51, KEY_FOUR = 52, KEY_FIVE = 53,
              KEY_SIX = 54, KEY_SEVEN = 55, KEY_EIGHT = 56, KEY_NINE = 57, BACK = 127, ADD = 43, RESULT = 61;
        
        console.log(keyevent);
        
        switch (keyevent.keyCode) {
            case KEY_ZERO: 
                calculator.e.display.innerHTML += keyevent.key;
                break;
            case KEY_ONE:
                calculator.e.display.innerHTML += keyevent.key;
                break;
            case KEY_TWO: 
                calculator.e.display.innerHTML += keyevent.key;
                break;
            case KEY_THREE:
                calculator.e.display.innerHTML += keyevent.key;
                break;
            case KEY_FOUR: 
                calculator.e.display.innerHTML += keyevent.key;
                break;
            case KEY_FIVE:
                calculator.e.display.innerHTML += keyevent.key;
                break;
            case KEY_SIX: 
                calculator.e.display.innerHTML += keyevent.key;
                break;
            case KEY_SEVEN:
                calculator.e.display.innerHTML += keyevent.key;
                break;
            case KEY_EIGHT: 
                calculator.e.display.innerHTML += keyevent.key;
                break;
            case KEY_NINE:
                calculator.e.display.innerHTML += keyevent.key;
                break;
            case BACK: 
                calculator.e.display.innerHTML = calculator.e.display.innerHTML.slice(0,-1);
                break;
            case ADD:
                console.log("add");
                break;
            case EQUALS: 
                console.log("grabbing result");
                break;
        }   
    }.bind(this));

    for (let nb of calculator.e.number_keys) {
        /* When each number key is pressed add that value to the display */
        nb.addEventListener("click", () => {
            if (nb.id == 'period') {
                if (calculator.checkPeriod() == false) {
                    calculator.e.display.innerHTML += nb.innerHTML;
                }
            } else {
                if (calculator.e.display.offsetWidth < calculator.e.display.scrollWidth) {
                    console.log("overflow");
                } else {
                    calculator.e.display.innerHTML += nb.innerHTML;
                }
            }
        });
    }

    calculator.e.clear.addEventListener('click', () => {
        calculator.e.display.innerHTML = '';
    });

    calculator.e.delete.addEventListener('click', () => {
        calculator.e.display.innerHTML = calculator.e.display.innerHTML.slice(0,-1);
    });

    for (let operator of calculator.e.operators) {
        operator.addEventListener("click", () => {
            if (calculator.checkEmpty() !== true) {
                if (operator.id == 'equals') {
                    if (calculator.checkIfAnyOperator() === true) {
                        calculator.e.display.innerHTML = eval(calculator.e.display.innerHTML);
                    }
                } else {
                    if (calculator.checkOperators(calculator.checkNext()) == false && operator.id != 'del') {
                        calculator.e.display.innerHTML += operator.innerHTML;
                    }
                }

            }
        });
    }
};

calculator.init = () => {
    /* Add all the operators to the array */
    for (let op of calculator.e.operators) {
        calculator.operators.push(op.innerHTML);
    }
    calculator.addListeners();
};

calculator.init();