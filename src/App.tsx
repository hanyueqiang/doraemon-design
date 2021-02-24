import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from './components/Icon/icon'
import { fas, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {
  return (
    <div className="App">
      <Button onClick={e => console.log(e)}>hello</Button>
      <Button btnType="primary">hello</Button>
      <Button btnType="primary" size="lg">hello</Button>
      <Button btnType="danger" size="sm">hello</Button>
      <Button btnType="link" href="dfdsdf" size="lg">Link</Button>
      <Button btnType="link" href="http://www.baidu.com" target="_blank">Link1</Button>
      <FontAwesomeIcon icon={faCoffee} size="lg" />
      <Icon icon="coffee" theme="danger" />
      <div>
        <Menu defaultOpenSubMenu={['2']}>
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
