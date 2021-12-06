import * as React from 'react';

interface MineProps {
  
}

interface MineState {
  num:number
}

class Mine extends React.Component<MineProps, MineState> {
  public timerID: string | undefined;

  constructor(props: MineProps) {
    super(props);
    this.state = { num: 1 };
  }

  componentDidMount() {
    this.timerID = ''
  }

  render() { 
    return (
      <div>
        {this.state.num}
      </div>
    );
  }
}

export default Mine;