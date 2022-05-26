import { FC, useState, useEffect} from "react";

interface UStateProps {
  
}

interface stateIUser { 
  name: string,
  age: number
}

const UState: FC<UStateProps> = () => {
  
  const [count, setCount] = useState<number>(0)

  const [user, setUser] = useState<stateIUser>({} as stateIUser)

  useEffect(() => {
    setUser(() => ({ name: 'BATMAN', age: 22 }))
  },[])

  // 相当于更新阶段：componentDidMount和componentDidUpdate
  useEffect(() => { 
    document.title = `${count} times!`
    
    return () => { 
      document.title = 'react-ts learning!'
    }
  })

  return (
    <div>
      <p>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount(count => count + 1)}>+1</button>
        <span>count: {count}</span>
      </p>
      <p>
        个人信息：
        <br />
        <span>name:{user.name || ''}</span>
        <br />
        <span>age:{user.age || ''}</span>
        </p>
    </div>
  );
}

export default UState;