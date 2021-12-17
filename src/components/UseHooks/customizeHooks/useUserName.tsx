import { useDebugValue, useState } from 'react';
import { useEffect } from 'react';


function UserName(isOnline: boolean): string { 
  const BT = 'BATMAN'
  const [name, setName] = useState('🤡The Joker')
  
  useEffect(() => { 
    setName(isOnline ? '🤡The Joker' : '😢Joaquin Rafael Phoenix')
  }, [isOnline])

  useDebugValue(name, (name) => {
    return `${name} was subdued by ${BT}`
  })

  return name
}

export default UserName;