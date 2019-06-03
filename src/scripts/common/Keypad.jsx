import React from 'react';
import * as config from '../config/config';
import Box from './Buttons';

export default function(props) {
  let keypadRows;
  if (props.type === 'calculator') {
    // if signific mode is on, add corresponding keypads
    keypadRows = props.isSciModeOn ? config.CALC.keypads.concat(config.CALC.scientificmode) : config.CALC.keypads;
  }
  
  return (
    <div>
      { props.type === 'calculator' && (
          <React.Fragment>
            { keypadRows.map((rowItem, ind) => (
                <div className="keypad-row" key={ind}>
                  { rowItem.map(item => (
                      <Box
                        key={item.value}
                        {...item}
                        clickHandler={props.clickHandler}
                      />
                    ))
                  }
                </div>
              ))
            }
          </React.Fragment>
        )
      }
    </div>
  )
}