import { Button } from 'antd';
import { useState } from 'react';

function Hoc<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    return <Component msg="大家好！我是HOC" {...props} />;
  };
}

function Index(props) {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      <Button onClick={() => setFlag(!flag)}>获取props</Button>
      {flag && <p>{JSON.stringify(props)}</p>}
    </div>
  );
}

export default Hoc(Index);
