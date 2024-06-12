import { useReducer } from 'react';
import { Button } from 'antd';

const Child: React.FC<any> = ({ count }) => {
  console.log('子组件发生更新');
  return <div>在子组件的count：{count}</div>;
};
const Index = () => {
  console.log('父组件发生更新');
  const [count, dispatch] = useReducer((state: number, action: any) => {
    switch (action?.type) {
      case 'add':
        return state + action?.payload;
      case 'sub':
        return state - action?.payload;
      default:
        return state;
    }
  }, 10);

  return (
    <div>
      <p>count： {count} </p>
      <Button onClick={() => dispatch({ type: 'add', payload: 1 })}>加1</Button>
      <Button
        type="primary"
        onClick={() => dispatch({ type: 'sub', payload: 1 })}
      >
        减1
      </Button>

      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => dispatch({ type: 'no', payload: 1 })}
      >
        无关按钮
      </Button>
      <Child count={count} />
    </div>
  );
};
export default Index;
