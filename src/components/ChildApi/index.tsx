import { FC, Component, Children } from 'react';


class Text extends Component {
  render() {
    return <div>hello,world</div>
  }
}


interface warpProps {
  children: any
}

const WarpComponent: FC<warpProps> = (props) => {
  const newChild = Children.map(props.children, item => item)
  console.log(newChild)
  return newChild
}


interface CProp { 
  
}

const ChildApi: FC<CProp> = () => { 
  return (
    <div>
      <WarpComponent>
        {new Array(3).fill(0).map((i, idx) => <Text key={idx}/>)}
      </WarpComponent>
    </div>
  )
}

export default ChildApi