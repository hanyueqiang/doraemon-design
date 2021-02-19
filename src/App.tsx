import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button onClick={e => console.log(e)}>hello</Button>
      <Button btnType={ButtonType.Primary}>hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>hello</Button>
      <Button btnType={ButtonType.Link} href="dfdsdf" size={ButtonSize.Large}>Link</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Link1</Button>
    </div>
  );
}

export default App;
