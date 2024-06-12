import React, { useState, createContext, useContext } from 'react';
import { Button, Divider } from 'antd';
const CountContext = createContext(-1);
const Son = () => {
  const count = useContext(CountContext);
  return <>孙子组件接收的count值: {count}</>;
};
const Child = () => {
  const count = useContext(CountContext);
  return <>子组件接收的count值: {count}</>;
};

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <Child />
      <Divider />
      <Son />
      <Divider />
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count++
      </Button>
    </CountContext.Provider>
  );
};

export default Index;
