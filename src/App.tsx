import React from 'react';
import Button , {ButtonType,ButtonSize}from './components/Button/button'



function App() {

 
  return (
    <div className="App">
      app
      <Button className="custom" autoFocus onClick={(e)=>{e.preventDefault(); alert('123')}} btnType={ButtonType.Danger} size={ButtonSize.Small} >按钮</Button>
      <Button disabled >按钮</Button>
      <Button btnType={ButtonType.Primary}  size={ButtonSize.Large}>按钮</Button>
      <Button btnType={ButtonType.Link} href="http://126.com" target="_blank" >Link</Button>
      <Button btnType={ButtonType.Link} href="http://126.com" disabled>Link</Button>
      <h1>Hello World</h1>
      <h2>Hello World</h2>
      <h3>Hello World</h3>
      <hr/>
      <code>
        const a = 'b'
      </code>
      <p>Edit <code>src/App.tsx</code> and save to reload</p>
      <a href="#" >Links</a>
    </div>
  );
}

export default App;
