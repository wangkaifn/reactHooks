import { Button } from 'antd';
import React, { ForwardRefRenderFunction } from 'react';
import { forwardRef, useImperativeHandle, useState } from 'react';

const Child: ForwardRefRenderFunction<unknown, any> = (props:any, ref:any) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => {
    return {
      add,
    };
  });
  const add = () => {
    setCount(count + 1);
  };

  return (
    <div>
      在子组件的count：{count}
      <Button onClick={() => setCount(count + 1)}>子组件点击</Button>
    </div>
  );
};


const ForwardChild = forwardRef(Child);

class Index extends React.Component {
  countRef:any = null;
  render() {
    return (
      <div>
        <Button onClick={() => this.countRef.add()}>父组件点击按钮</Button>
        <ForwardChild ref={(el) => (this.countRef = el)} />
      </div>
    );
  }
}

export default Index;

