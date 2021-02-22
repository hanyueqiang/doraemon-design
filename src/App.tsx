import React from 'react';
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <Button onClick={e => console.log(e)}>hello</Button>
      <Button btnType="primary">hello</Button>
      <Button btnType="primary" size="lg">hello</Button>
      <Button btnType="danger" size="sm">hello</Button>
      <Button btnType="link" href="dfdsdf" size="lg">Link</Button>
      <Button btnType="link" href="http://www.baidu.com" target="_blank">Link1</Button>
      <div>
        <Menu mode="vertical" defaultOpenSubMenu={['2']}>
          <MenuItem>12345</MenuItem>
          <MenuItem>3456</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dow1</MenuItem>
            <MenuItem>dow2</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default App;
