import { useEffect, useLayoutEffect, useState } from 'react';

const Index: React.FC<any> = () => {
  const [count, setCount] = useState(0);
  const [layoutCount, setLayoutCount] = useState(0);
  useEffect(() => {
    if(count === 0){
      setCount(10 + Math.random() * 100);
    }
  },[count])
  
  useLayoutEffect(() => {
    if(layoutCount ===0){
      setLayoutCount(10 + Math.random() * 100);
    }
    
  }, [layoutCount]);
  return <div>
    <p>count：{count}</p>
    <p>layoutCount：{layoutCount}</p>
  
  </div>;
}

export default Index