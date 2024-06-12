import { useMemo, useState } from 'react';
import { Button } from 'antd';
const usePow = (num: number) => {
  return useMemo(() => {
    console.log('执行函数');

    Math.pow(num, 2);
  }, []);
};

const Index = () => {
  const [flag, setFlag] = useState(true);
  const data = usePow(2);

  return (
    <>
      <div>数字集合：{JSON.stringify(data)}</div>
      <Button type="primary" onClick={() => setFlag((v) => !v)}>
        状态切换{JSON.stringify(flag)}
      </Button>
    </>
  );
};

export default Index;
