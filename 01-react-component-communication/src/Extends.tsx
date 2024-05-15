import { Button } from 'antd';
import React from 'react';

class Child extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      msg: '大家好！',
    };
  }

  speak() {
    console.log('Child中的speak');
  }
  render(): React.ReactNode {
    return (
      <div>
        {this.state.msg}
        <Button onClick={() => this.speak()}>说话</Button>
      </div>
    );
  }
}

class Index extends Child {
  speak(): void {
    console.log('Index中的speak 我强化了 speak方法 会替代Child的speak方法');
  }
}

export default Index;
