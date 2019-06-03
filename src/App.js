import React from 'react';
import Calculator from './scripts/calculator/Calculator';
import { ThemeContext, themes } from './theme-context';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = theme => this.setState({theme: themes[`${theme}`] });

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }
  render() {
    return (
      <div className="page" style={{backgroundColor: this.state.theme.pageBackground}} >
        <ThemeContext.Provider value={this.state}>
          <Calculator />
        </ThemeContext.Provider>
      </div>
      
     );
  }
}
