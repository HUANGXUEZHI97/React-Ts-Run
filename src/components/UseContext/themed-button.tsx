import * as React from 'react';
import { ThemeContext } from '../../context/Theme';

class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) =>
          <button
            onClick={toggleTheme}
            style={{ background: theme.background }}
          >
            {this.props.children}
          </button>
        }
      </ThemeContext.Consumer>
    );
  }
}

export default ThemedButton;