import { Button } from 'antd'
import { memo, useCallback, useState } from 'react'

const UseCallBack = () => {

  const [flag, setFlag] = useState(true)
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(count + 1)
  },[count])
  return (
    <div>
      <TestButton onClick={() => setCount(count + 1)}>普通点击</TestButton>
      <TestButton onClick={handleClick}>useCallback点击</TestButton>
      <p>count：{count}</p>
      <Button onClick={() => setFlag(!flag)}>切换 {flag}</Button>
    </div>
  )
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TestButton = memo(({ children, onClick }:any) => {
  console.log(children);
  return (
    <Button
      onClick={onClick}
      style={children === "useCallback点击" ? { marginLeft: 10 } : undefined}
    >
      {children}
    </Button>
  )
})

export default UseCallBack