import { FC, useEffect,useState,memo } from "react";

interface ChildProps {
  count:number
}

const Child: FC<ChildProps> = (prop) => {
  const [count,setCount] = useState(0)
  console.log('====================================');
  console.log('updated!!');
  console.log('====================================');

  // 相当于更新阶段：componentDidMount和componentDidUpdate
  useEffect(() => {
    console.log('====================================');
    console.log('effect');
    console.log('====================================');
  })

  useEffect(() => { 
    if (prop.count) {
      setCount(count + 1)
    }
  },[prop.count])

  return (
    <div>
      <div>ggg</div>
      <div>{count}</div>
      {prop.count ? '' : <div>{ count }</div>}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default memo(Child);