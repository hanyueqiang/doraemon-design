import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <Button onClick={e => console.log(e)}>hello</Button>
      <Button btnType={ButtonType.Primary}>hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>hello</Button>
      <Button btnType={ButtonType.Link} href="dfdsdf" size={ButtonSize.Large}>Link</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Link1</Button>
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
