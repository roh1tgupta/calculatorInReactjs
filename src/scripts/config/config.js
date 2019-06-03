// keypads for calculator
export const CALC = {
  keypads: [
    [
      {display: 'Light Theme', value: 'light'},
      {display: 'Dark Theme', value: 'dark'}
    ],
    [
      {display: '1', value: 1},
      {display: '2', value: 2},
      {display: '3', value: 3},
      {display: 'Add (+)', value: '+'}
    ],
    [
      {display: '4', value: 4},
      {display: '5', value: 5},
      {display: '6', value: 6},
      {display: 'Subtract (-)', value: '-'}
    ],
    [
      {display: '7', value: 7},
      {display: '8', value: 8},
      {display: '9', value: 9},
      {display: 'Multiply (*)', value: '*'}
    ],
    [
      {display: 'Clear', value: 'clear'},
      {display: '0', value: 0},
      {display: '=', value: '='},
      {display: 'Divide (/)', value: '/'}
    ],
    [ 
      {display: 'Scientific Mode', value: 'sci-mode'}
    ],
  ],
  scientificmode: [
    [
      {display: 'sign', value: 'sign'},
      {display: 'square', value: 'square'},
      {display: 'sqRoot', value: 'squareroot'}
    ]
  ],
};

// supported operators in calculator
export const OPERATORS = ['+', '-', '/', '*'];
export const SCI_OPERATORS = { sign: -1, square: 2, squareroot: 0.5 }; // scientific operators
