import React , {useState} from 'react'

export default function Textformat(props) {

  const [text , setText] = useState("");
  const handleUpClick =()=>{
    // console.log("upper case Was Clicked");
    // setText("you have clicked on handleUpClick" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert(" text changed to uppercase" , "success");
  }

  const handleLoClick =()=>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert(" text changed to lowercase" , "success");
  }

  const handleOnChange =(event)=>{
    // console.log("on chnage");
    setText(event.target.value);

  }

  const handleClearClick =()=>{
    let newText = " ";
    setText(newText);
    props.showAlert(" text cleared" , "success");
  }

  const handleCopyClick =()=>{
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" text copied" , "success");
  }

  const handleSpaceClick =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" space cleared" , "success");
  }

  return (
    <>
    <div style = {{color:props.mode === "dark"?"white":"black"}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
           <textarea className="form-control" onChange = {handleOnChange} style = {{backgroundColor: props.mode === "dark"?"#4a5759":"white" , color: props.mode === "dark"?"white":"black"}} id="MyBox" value = {text} rows="8" placeholder='Enter Text Here'></textarea>
          </div>
          <button className = "btn btn-primary mx-2" onClick = {handleUpClick}>Convert To Uppercase</button>
          <button  className = "btn btn-primary mx-2" onClick = {handleLoClick}>Conver To Lowercase</button>
          <button className = "btn btn-primary mx-2" onClick = {handleClearClick}>Clear Text</button>
          <button className = "btn btn-primary mx-2" onClick = {handleCopyClick}>Copy Text</button>
          <button className = "btn btn-primary mx-2" onClick = {handleSpaceClick}>Clear Space</button>
    </div>

    <div className = "container my-2" style = {{color: props.mode === "dark"?"white":"black"}}>
      <h2>Your Text Sumary</h2>
      <p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length} words and {text.trim().length} characters</p>
      <p>{0.008 * text.replace(/\n/g, " ").split(" ").filter(value => value != "").length} Minutes to read text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box above to preview it"}</p>
    </div>
    </>
  )
}
