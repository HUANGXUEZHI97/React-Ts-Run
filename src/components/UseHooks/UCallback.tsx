import { FunctionComponent, useCallback } from 'react';

interface UCallbackProps {
  isOnline:boolean
}

const UCallback: FunctionComponent<UCallbackProps> = (props) => {
  
  const memoizedCallback = useCallback(() => { 
    const val = props.isOnline
    return val
  }, [props.isOnline])

  return (
    <div>
      userStatus：
      <i style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: memoizedCallback() ? '#08d308' : '#ddd'}} />
    </div>
  );
}

export default UCallback;