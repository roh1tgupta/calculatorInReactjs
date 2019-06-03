import React from 'react';
import DisplayBox from './Buttons.jsx';

export default function(props) {
  return (
    <div className="display-row">
      <DisplayBox {...props} isMutable="no"/>
    </div>
  )
}