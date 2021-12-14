import * as React from 'react';
import { ThemeContext, themes} from '../../context/Theme';
import ThemedButton from './themed-button';


interface TBProps {
  changeTheme: Function
}

const Toolbar = (props: TBProps) => {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  )
}

interface CTProps {
  
}

interface CTState {
  theme: {
    foreground: string,
    background: string
  }
}

class CT extends React.Component<CTProps, CTState> {
  constructor(props: CTProps) {
    super(props);
    this.state = { theme: themes.light };
  }

  toggleTheme = ()=>{ 
    this.setState(state => ({
      theme: state.theme === themes.dark
        ? themes.light
        : themes.dark
    }))
  }

  render() { 
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton>
            Hello!
          </ThemedButton>
        </div>
      </div>
    );
  }
}

export default CT;