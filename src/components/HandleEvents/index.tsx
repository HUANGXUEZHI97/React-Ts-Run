import { FunctionComponent} from 'react';
import Change from './Change';

const HandleEvents: FunctionComponent = () => {
  return (
    <div>
      <h3>EVENTS：</h3>
      {/* 修改input事件 */}
      <Change />
      <hr />
    </div>
  );
}

export default HandleEvents;