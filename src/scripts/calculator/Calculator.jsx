import React from 'react';
import Keypad from '../common/Keypad.jsx';
import DisplayScreen from '../common/DisplayScreen.jsx';
export default function () {
  return (
    <div className="calculator">
      <DisplayScreen
          boxType="text"
          cssClassName="calc-display-box"
          display={`${this.state.expression ? `${this.state.expression}  ` : ''}${this.state.value}`}
         />
      <Keypad type="calculator" isSciModeOn={this.state.isSciModeOn} clickHandler={this.clickHandler}/>
    </div>
  )
}