import React from 'react';
import { ThemeContext } from '../../theme-context';
import { OPERATORS } from '../config/config';

export default function(props) {
  const clickHandler = (toggleTheme) => {
    if (props.isMutable === 'no') {
      // for display screen, disabling onclick
      return;
    } else if (props.display.includes('Theme') && toggleTheme) {
      toggleTheme(props.value);
    } else if (props.clickHandler) {
      props.clickHandler(props.value);
    } else {
      return;
    }
  };

  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <input
          type={props.boxType || 'button'}
          className={`keypad${OPERATORS.includes(props.value) ? ' operator' : ''}`}
          readOnly={props.isMutable === 'no' ? true : false}
          onClick={() => clickHandler(toggleTheme)}
          value={props.display}
          style={{backgroundColor: `${props.boxType === 'text' ? '' : `${theme.buttonsBackground}`}`,
            color: `${props.boxType === 'text' ? '' : `${theme.fontColor}`}`
          }}
        />
      )}
    </ThemeContext.Consumer>
  )
}