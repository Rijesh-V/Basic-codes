import React,{useState,useEffect}from 'react';


function TextLength(props){
    useEffect(() => {
        console.log("Component Mounted");
      },[]);
    return (
        <div>
    {console.log("Inside return area") 
    } 
       Number of Characters : {props.textValue.length}
</div>)
}

export default React.memo(TextLength) //used memo here to render only when text value changes so it will not render when mouse value changes 