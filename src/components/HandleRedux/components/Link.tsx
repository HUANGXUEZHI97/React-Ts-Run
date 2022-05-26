import { FC } from 'react'

interface LinkProps { 
  active:boolean,
  children:Node,
  onClick():void
}
const Link: FC<LinkProps> = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href="javascript;"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}


export default Link