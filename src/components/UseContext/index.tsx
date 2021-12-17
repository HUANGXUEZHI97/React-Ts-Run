import * as React from 'react';
import { ThemeContext, themes } from '../../context/Theme';
import ThemedButton from './themed-button';

interface UContextProps {

}

interface UContextState {
  theme: {
    foreground: string,
    background: string
  },
  toggleTheme: () => void
}

class UContext extends React.Component<UContextProps, UContextState> {
  constructor(props: UContextProps) {
    super(props);

    const toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark
          ? themes.light
          : themes.dark
      }))
    }

    this.state = {
      theme: themes.light,
      toggleTheme: toggleTheme,
    };
  }



  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <ThemedButton>
            Change Theme
          </ThemedButton>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default UContext;