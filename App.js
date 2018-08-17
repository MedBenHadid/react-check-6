import React, { Component } from 'react';
import './App.css';
class App extends Component {
render() 
  {
    const  change = (name,desc1,desc2)=>{ 
      document.getElementById("image").setAttribute('src',`image/${name}.JPG`)
      document.getElementById("name").innerHTML=name
      document.getElementById("desc1").innerHTML=desc1
      document.getElementById("desc2").innerHTML=desc2
    }
    
return (
      <div className="app">
      <button onClick={()=>change("arslen","petit comme ca<====>","efficace comme ca <===================>")}>arslen</button>
      
      <button onClick={()=>change("ilyes","dima y9oul ijew bikri ,dima yji makhar","")}>ilyes</button>
      
      <button onClick={()=>change("oumaima","seybouli khdoudi u__u","")}>oumaima</button>
     
<div>
 <img id="image"/>
 <h1 id="name"></h1>
 <p id="desc1"></p>
 <p id="desc2"></p>
 </div>
 </div>
    );
  }
}

export default App;
