import { useState } from 'react';
import { Button } from 'antd';

// 基础使用
const BasicUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>当前计数： {count} </p>
      <Button onClick={() => setCount(count + 1)}>第一种方式</Button>
      <Button onClick={() => setCount((c) => c + 1)}>第二种方式</Button>
    </div>
  );
};

//浅比较测试
const PureUseState = () => {
  // eslint-disable-next-line prefer-const
  let [count, setCount] = useState(0);
  const [obj, setObj] = useState({ number: 0 });
  return (
    <div>
      <p>数字： {count} </p>

      <Button
        onClick={() => {
          count++;
          setCount(count);
        }}
      >
        数字
      </Button>
      <p>对象： {obj.number} </p>
      <Button
        onClick={() => {
          obj.number++;
          setObj(obj);
        }}
      >
        对象
      </Button>
    </div>
  );
};

export default PureUseState;
