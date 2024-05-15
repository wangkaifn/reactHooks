import { Button } from 'antd';
import { useState } from 'react';

function Son({ getCount }: any) {
  const [count, setCount] = useState(0);
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
      <Button
        onClick={() => {
          getCount(count + 1);
          setCount(count + 1);
        }}
      >
        我是子组件的按钮 :{count}
      </Button>
    </div>
  );
}

function SonToFather() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
      }}
    >
      我是父组件 子组件传递的count：{count}
      <Son
        count={count}
        getCount={(count) => {
          setCount(count);
        }}
      />
    </div>
  );
}

export default SonToFather;
