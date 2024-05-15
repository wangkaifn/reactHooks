import { Button, Checkbox, Input } from 'antd';
import React, { useState } from 'react';

const ThemeContext = React.createContext(null);
//主题颜色
const themeColor = {
  dark: {
    color: '#5B8FF9',
    background: '#5B8FF9',
    border: '1px solid #5B8FF9',
    type: 'dark',
    buttomType: 'primary',
  },
  light: {
    color: '#E86452',
    background: '#E86452',
    border: '1px solid #E86452',
    type: 'light',
    buttomType: 'default',
  },
};

function Index() {
  const [theme, setTheme] = useState(themeColor.dark);
  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const { color, border, buttomType, setTheme } =
    React.useContext(ThemeContext);
  return (
    <div style={{ padding: '10px', border }}>
      <p> 主题颜色</p>
      <CheckboxView name="light" onChange={() => setTheme(themeColor.light)}>
        主题1
      </CheckboxView>
      <CheckboxView name="dark" onChange={() => setTheme(themeColor.dark)}>
        主题2
      </CheckboxView>
      <p style={{ color }}>阿凯</p>
      <Input.TextArea style={{ border }} />
      <Button type={buttomType}>提交</Button>
    </div>
  );
}

class CheckboxView extends React.Component<any, any> {
  static contextType = ThemeContext;
  render(): React.ReactNode {
    const { children, name, onChange } = this.props;
    const { color, type }: any = this.context;
    console.log('🚀 ~ CheckboxView ~ render ~ this.context:', this.context);

    return (
      <Checkbox checked={type === name} style={{ color }} onChange={onChange}>
        {children}
      </Checkbox>
    );
  }
}

export default Index;
