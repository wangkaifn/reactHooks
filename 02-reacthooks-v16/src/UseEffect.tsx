import { useEffect, useState } from 'react';
import { Button } from 'antd';

//模拟挂载和卸载阶段 ：
const Destory = () => {
  useEffect(() => {
    console.log('组件挂载');

    return () => {
      console.log('组件卸载');
    };
  }, []);
  return <>子组件</>;
};

const DestoryIndex = () => {
  const [flag, setFlag] = useState(true);
  return (
    <>
      <Button onClick={() => setFlag(!flag)}>{flag ? '卸载' : '挂载'}</Button>
      {flag && <Destory />}
    </>
  );
};
// 依赖项更新
const UseEffectDeps = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log('count改变才会执行');
  }, [count]);
  return (
    <div>
      <p>
        count： {count} number： {number}{' '}
      </p>
      <Button onClick={() => setCount(count + 1)}>count</Button>
      <Button onClick={() => setNumber(number + 1)}>number</Button>
    </div>
  );
};

export default UseEffectDeps;
