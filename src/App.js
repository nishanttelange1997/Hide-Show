import React,{useState} from "react"; 
import './nishant.css';

function App() {
  const[condition,changeCondition]=useState(false)

  let myarea = '';
  
  const show = () =>
  {
    changeCondition(true);
  }
  const hide = () =>
  {
    changeCondition(false);
  }
  if(condition)
  {
    myarea = (
      
      <div className="fordiv">
<h1>Hello Evryone:{condition}</h1>

      
      </div>
    );
    }
  else{

  }

  
  return (
    <center>
      <div >
      <h1>Welcome</h1>
<button className="forButton" onClick={show} >Show</button>
<button className="forButton" onClick={hide} >Hide</button>
<br></br>
{myarea}      
          </div>
          </center>
  );
}

export default App;
