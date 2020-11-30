import React, { Component } from 'react';
import { Button } from 'antd';
import './App.less';

/**
 * 应用的根组件
 */

class App extends Component {
  render() {
    return <Button type="primary">antd按钮测试</Button>
  }
}

export default App;