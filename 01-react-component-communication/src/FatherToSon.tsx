import { useState } from 'react';
import { Button } from 'antd';
function Son({ count, setCount }: any) {
  return (
    <div
      style={{
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
      }}
    >
      我是子组件
      <Button onClick={() => setCount(count + 1)}>
        我是子组件的按钮，调用 父组件的setCount方法:{count}
      </Button>
    </div>
  );
}

function FatherToSon() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>我是父组件</div>
      <div>我是父组件的count:{count}</div>
      <Son count={count} setCount={setCount} />
    </div>
  );
}

export default FatherToSon;
