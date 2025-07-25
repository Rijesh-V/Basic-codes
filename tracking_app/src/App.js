
import './App.css';
import React,{useState,useEffect}from 'react';
import TextLength from './TextLength';

function App() {
const [textValue,settextValue]=useState("")
const handlesettextValue = (event) =>{
  settextValue(event.target.value)
}


const [mouseX,setmouseX] =useState(0)
const [mouseY,setmouseY] =useState(0)

const handleMouse = (event)=>{
  setmouseX(event.clientX);
  setmouseY(event.clientY)
}

useEffect(() => {
  console.log("Input field focused");
}, []);

  return (
    <div className='parent' onMouseMove={handleMouse} >
        <div className='child1'>     
          Enter the Characters   
         <input type="text" autoFocus onChange={handlesettextValue}/>    {/* used autofocus in text box , so cursor appears when the app starts  */}
         <TextLength textValue={textValue} />
         </div>
         <div className='child2' >
            Mouse Position
            <p> X : {mouseX}, Y : {mouseY}</p>
         </div>
    </div>

  );
}

export default App;
