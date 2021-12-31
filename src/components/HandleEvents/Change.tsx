import { FunctionComponent, useState} from 'react';


const Change: FunctionComponent = () => {
  const [text, setText] = useState<string>('change me!')

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.FormEvent<HTMLInputElement>):void => {
    setText(e.currentTarget.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
    </div>
  );
}

Change.displayName = 'HandleChange'
export default Change;