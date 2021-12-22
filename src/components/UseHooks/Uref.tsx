import { FunctionComponent, useState, useRef, useCallback} from 'react';

const Uref: FunctionComponent = () => {
  const [height, setHeight] = useState(0);
  const inputEl = useRef<HTMLInputElement | null>(null)
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);
  const handleFocusInput = () => {
    if (inputEl.current) { 
      inputEl.current.focus()
      inputEl.current.value = 'finally,we win!'
    }
  }
  return (
    <div>
      {/* 此处使用了ref的时候，调用了measuredRef，相当于往measuredRef里面传递了dom本身 */}
      <h5 ref={measuredRef}>Hello, world</h5>
      <h6>The above header is {Math.round(height)}px tall</h6>
      {/* 往inputEl上设置了当前dom */}
      <input ref={inputEl} type="text" />
      <button onClick={handleFocusInput}>Focus the input</button>
    </div>
  );
}

export default Uref;