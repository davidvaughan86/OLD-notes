import logo from './logo.svg';
import './App.css';
import Header from './header'
import Red from './red'
import Green from './green'
import Blue from './blue'
import React, {useState} from 'react'

function App() {
  const [ color, setColor ] = useState("")
  
    
    console.log(color)
    const divStyle = {
      color: 'red',
      backgroundColor: color
    };
    


  return (
    <div className="App" style={divStyle}>
     <Header />
     <Red red={() =>setColor("red")}/>
     <Green green={() => setColor("green")} />
     <Blue blue={() => setColor("blue")} />
    </div>
  );
}

export default App;
