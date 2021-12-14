import * as React from 'react';
import {ThemeContext} from '../../context/Theme';

interface ThemedButtonProps {
  onClick?:Function
}
 
interface ThemedButtonState {
  
}
 
class ThemedButton extends React.Component<ThemedButtonProps, ThemedButtonState> {
  static contextType?: React.Context<any> | undefined = ThemeContext

  render() {
    let props = this.props
    let theme = this.context
    return (
      <button
        onClick={()=>props.onClick}
        style={{ background: theme.background }}
      >
        {props.children}
      </button>
    );
  }
}

export default ThemedButton;