import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert("Converted to uppercase","success")//overrides the showalert send from app.js route textform
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase clicked");
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert("Converted to Lowercase","warning")
    }
    const handleclear = ()=>{
        // console.log("Uppercase clicked");
        let newtext = "";
        setText(newtext)
        props.showalert("Text cleared","success")
    }
    const handleOnChange = (event)=>{
        // console.log("Onchange clicked");
        setText(event.target.value);//helps to add new value with the current value
    }
    const worcount = (words)=>{
        
    }

    const [text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-1" onClick={handleclear}>Clear</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Yout text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
