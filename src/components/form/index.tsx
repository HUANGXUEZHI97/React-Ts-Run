import * as React from 'react';

interface FormProps {
  
}
 
interface FormState {
  
}
 
class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = { count:0  };
  }
  render() { 
    return (
      <div>
        <input type="text" value={'hi'} disabled={ true} />
      </div>
    );
  }
}
 
export default Form;