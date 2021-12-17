
import { FunctionComponent, useMemo } from 'react';

interface UMemoProps {
  isOnline : boolean
}

const UMemo: FunctionComponent<UMemoProps> = (props) => {
  const userStatus = useMemo(() => { 
    return props.isOnline ? '在线' : '离线'
  }, [props.isOnline])
  return (
    <div>
      用户登录状态：{userStatus}
    </div>
  );
}

export default UMemo;