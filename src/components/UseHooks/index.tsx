
import { FunctionComponent, useState } from 'react';
import UState from './UState';
import UContext from '../UseContext/index';
import UReducer from './UReducerr';
import UCallback from './UCallback';
import UMemo from './UMemo';
import Uref from './Uref';
import { useUserName} from './customizeHooks';

interface UHooksProps {
  
}

const UHooks: FunctionComponent<UHooksProps> = () => {
  const RDcount = 666

  const [isOnline,setOnlineStatus] = useState(true)

  // 设置在线状态
  const handleSetOnline = () => {
    setOnlineStatus(isOnline => !isOnline)
  }

  // 自定义Hooks

  // 用户名称，根据是否在线，切换小丑角色
  const name = useUserName(isOnline)

  return (
    <div>
      <h3>HOOKS:</h3>

      <div>
        🤡Mysterious Btn：
        <button onClick={handleSetOnline}>handleSetOnline</button>
      </div>
      
      <hr />
      <h3>自定义Hooks</h3>
      <h4>{name}</h4>
      <hr />
      <UState />
      <hr />
      <UContext />
      <hr />
      <UReducer initialCount={RDcount}/>
      <hr />
      <UCallback isOnline={isOnline} />
      <hr />
      <UMemo isOnline={isOnline} />
      <hr />
      <Uref />
    </div>
  );
}

export default UHooks;