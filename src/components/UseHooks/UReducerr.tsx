import { FunctionComponent, useReducer } from 'react';

interface ReducerState {
  count: number
}

interface ReducerAction {
  type: string,
  payload?: number
}

function init(initialCount: ReducerState['count']) {
  return { count: initialCount };
}

function reducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload ?? 0);
    default:
      throw new Error();
  }
}

interface UReducerProps {
  initialCount: number
}

const UReducer: FunctionComponent<UReducerProps> = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      <p>Count: {state.count}</p>
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

export default UReducer;