import { FunctionComponent, useState, useEffect } from "react";
interface UStateProps {
  
}

const UState: FunctionComponent<UStateProps> = () => {
  
  const [count, setCount] = useState(0)

  // 相当于更新阶段：componentDidMount和componentDidUpdate
  useEffect(() => { 
    document.title = `${count} times!`
    
    return () => { 
      document.title = 'react-ts learning!'
    }
  })

  return (
    <div>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count => count + 1)}>+1</button>
      <span>count: {count}</span>
    </div>
  );
}

export default UState;