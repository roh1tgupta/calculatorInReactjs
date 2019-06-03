import { Component } from 'react';
import { OPERATORS, SCI_OPERATORS } from '../config/config';
import Template from './Calculator.jsx';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    // below two class variable would be used when user
    // click = back to back
    this.lastOperator = '';
    this.lastOperateeNumber = '';
    // if user clicks on any operator, right operand would be considered same as left one
    // eg pressing 5 +  would be considered as 5 + 5, here didUserUpdate is false
    // when user sets the right operand then didUserUpdate is true
    this.didUserUpdate = false;
    this.state = {    
      expression: '', // stores left operand and operator
      value: '0', // stores right operand
      isSciModeOn: false // for scientific mode of calculator
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  shouldComponentUpdate(props, state) {
    return !(state.expression === this.state.expression
      && state.value === this.state.value
      && state.expression === this.state.isSciModeOn);
  }

  handleError() {
    this.lastOperator = '';
    this.lastOperateeNumber = '';
    this.didUserUpdate = false;
    this.setState({ expression: '', value: 'error' });
  }

  handleOperators(operator) {
    // in case error occurs, only numeric and clear key will allow user to use calc
    // other keys won't work
    if (this.state.value === 'error') {
      return;
    }
    let expression = this.state.expression;
    let result = this.state.value;
    if (expression !== '') {
      if (OPERATORS.includes(expression[expression.length - 1]) && !this.didUserUpdate) {
        // this block handle when user clicks operators keys back to back, last would be considered
        // (!this.didUserUpdate) means operators keys get hit back to back
        expression = expression.split('');
        expression = expression.filter((item, ind) => ind !== expression.length-1).join(',').replace(/,/g, '');
        expression += operator;
      } else {
        // this.state.value can be negative that's why braces are added
        result = this.calculate(expression + '(' + this.state.value + ')');
        expression = '' + result + operator;
      }
    } else {
      expression += this.state.value + operator;
    }
    if (result === 'error') {
      this.handleError();
    } else {
      this.lastOperator = operator;
      this.lastOperateeNumber = this.state.value;
      this.didUserUpdate = false;
      this.setState({ expression, value: result });
    }
  }

  calculate(expression) {
    try {
      let result = eval('' + expression) + '';
      if (result.includes('Infinity') || result.includes('NaN')) {
        // when number goes beyond limit or user tries to find 
        // squareroot of negative number
        throw new Error();
      }
      return result;
    } catch {
      return 'error';
    }
  }

  handleKeyPad(digit) {
    let value = this.state.value;
    if (value === '0' || value === 'error' || !this.didUserUpdate) {
      this.didUserUpdate = true;
      this.setState({ value: '' + digit });
    } else {
      this.setState({ value: value + '' + digit });
    }
  }

  clearStack() {
    this.lastOperateeNumber = '';
    this.lastOperator = '';
    if (this.state.expression !== '' || this.state.value !== '0') {
      this.setState({ value: '0', expression: '' });
    }
  }

  // when = is hit, only showing the result of calculation.
  // on hitting back to back, would calculate result using last operator and
  // last number entered by user
  showResult() {
    if (!this.lastOperator) {
      return;
    }
    let expression;
    if (this.state.expression) {
      this.lastOperateeNumber = this.state.value;
      expression = this.state.expression;
    } else {
      expression = this.state.value + this.lastOperator;
    }
    let result = this.calculate(expression + '(' + this.lastOperateeNumber + ')');
    if (result === 'error') {
      this.lastOperator = '';
    } else if (Number(result) * 1000 % 1 !== 0) {
      // truncating the number to 3 decimal points
      result = Number(result).toFixed(3) + '';
    }
    this.setState({ value: result, expression: '' });
  }

  toggleSciMode() {
    this.setState({ isSciModeOn: !this.state.isSciModeOn });
  }

  // handles scientific operator
  handleSciOperator(value) {
    if (this.state.value === 'error') {
      return;
    }
    let result;
    try {
      if (value === 'sign') {
        result = this.state.value * (SCI_OPERATORS[`${value}`]);
      } else {
        result = Math.pow(this.state.value, SCI_OPERATORS[`${value}`]);
      }
      if (Number.isNaN(result)) {
        throw new Error();
      }
      if (Number(result) * 1000 % 1 !== 0) {
        result = Number(result).toFixed(3) + '';
      }
      this.setState({ value: '' + result });
    } catch {
      this.handleError();
    }
  }
  
  clickHandler(value) {
    switch (value) {
      case '+':
      case '-':
      case '/':
      case '*':
        this.handleOperators(value);
        break;
      case 'clear':
        this.clearStack();
        break;
      case '=':
        this.showResult();
        break;
      case 'sci-mode':
        this.toggleSciMode();
        break;
      case 'sign':
      case 'square':
      case 'squareroot':
        this.handleSciOperator(value);
        break;
      default:
        this.handleKeyPad(value);
    }
  }
  
  render() {
    return Template.call(this);
  }
}