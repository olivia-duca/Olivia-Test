import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '%':
        return firstValue % secondValue;
      default:
        return secondValue;
    }
  };

  const toggleSign = () => {
    const value = parseFloat(display);
    setDisplay(String(value * -1));
  };

  const inputPercent = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(222, 0, 67, 0.15)' }}>
      <Display value={display} operation={operation} />
      
      <div className="p-6">
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <Button label="C" onClick={clear} variant="function" />
          <Button label="±" onClick={toggleSign} variant="function" />
          <Button label="%" onClick={inputPercent} variant="function" />
          <Button label="÷" onClick={() => performOperation('÷')} variant="operator" />

          {/* Row 2 */}
          <Button label="7" onClick={() => inputDigit(7)} />
          <Button label="8" onClick={() => inputDigit(8)} />
          <Button label="9" onClick={() => inputDigit(9)} />
          <Button label="×" onClick={() => performOperation('×')} variant="operator" />

          {/* Row 3 */}
          <Button label="4" onClick={() => inputDigit(4)} />
          <Button label="5" onClick={() => inputDigit(5)} />
          <Button label="6" onClick={() => inputDigit(6)} />
          <Button label="-" onClick={() => performOperation('-')} variant="operator" />

          {/* Row 4 */}
          <Button label="1" onClick={() => inputDigit(1)} />
          <Button label="2" onClick={() => inputDigit(2)} />
          <Button label="3" onClick={() => inputDigit(3)} />
          <Button label="+" onClick={() => performOperation('+')} variant="operator" />

          {/* Row 5 */}
          <Button label="0" onClick={() => inputDigit(0)} className="col-span-2" />
          <Button label="." onClick={inputDecimal} />
          <Button label="=" onClick={() => performOperation('=')} variant="equals" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;