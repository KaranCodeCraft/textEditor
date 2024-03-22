import React, {useState} from "react";
import Alert from "./alert.js"

export default function Textfrom(props) {

  const [text, setText] = useState('')
  const [alert, setAlert] = useState('none')
  const [alertText, setalertText] = useState('Alert')
  
  const onchange = (event)=>{
    setText(event.target.value)
  }

  const convertToUpperCase = ()=>{
    let newText = text.toUpperCase()
    setText(newText)
    setAlert('flex')
    // document.title = "Copied to Clipboard"
    setalertText("Text converted to UpperCase ")
    setTimeout(()=>{
      setAlert('none')
      // document.title = 'Textutils'
    },2000)
  }

  const convertToLowerCase = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
    setAlert('flex')
    // document.title = "Copied to Clipboard"
    setalertText("Text converted to Lowercase ")
    setTimeout(()=>{
      setAlert('none')
      // document.title = 'Textutils'
    },2000)
  }

  const clearText = () =>{
    setText("")
    setAlert('flex')
    // document.title = "Copied to Clipboard"
    setalertText("Text cleared ")
    setTimeout(()=>{
      setAlert('none')
      // document.title = 'Textutils'
    },2000)
  }

  const copyToClipBoard = () =>{
    navigator.clipboard.writeText(document.getElementById('exampleFormControlTextarea1').value);
    setAlert('flex')
    // document.title = "Copied to Clipboard"
    setalertText("Text copied to clipboard ")
    setTimeout(()=>{
      setAlert('none')
      // document.title = 'Textutils'
    },2000)
  }

  const removeSpaces = () =>{
    let newText = text.replace(/\s+/g, ' ').trim()
    setText(newText)
    setAlert('flex')
    // document.title = "Copied to Clipboard"
    setalertText("Extra Spaces removed ")
    setTimeout(()=>{
      setAlert('none')
      // document.title = 'Textutils'
    },2000)
  }

  return (
    <>
      <div className="container my-3">
        <div id="aalert"
        style={{ position: "absolute", marginLeft: '65%', display: `${alert}`, zIndex: '1'}}>
        <Alert text={alertText}/>
        </div>
        <h1>{props.heading}</h1>
        <form className="my-3">
          <textarea
            value={text}
            onChange={onchange}
            placeholder="Enter your text here"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            style={{backgroundColor: props.mode ==='light'?'white':'#d0d0d0'}}
          ></textarea>
        </form>
        <button className={`btn btn-${props.mode} mx-2`} onClick={convertToUpperCase}>
          Convert to uppercase
        </button>
        <button className={`btn btn-${props.mode} mx-2`} onClick={convertToLowerCase}>
          Convert to lowercase
        </button>
        <button className={`btn btn-${props.mode} mx-2`} onClick={removeSpaces}>
          Remove Extra Spaces
        </button>
        <button className={`btn btn-${props.mode} mx-2`} onClick={copyToClipBoard}>
          Copy To Clipboard
        </button>
        <button className={`btn btn-${props.mode} mx-2`} onClick={clearText}>
          Clear TextArea
        </button>
      </div>
      <div className="container">
        <h1>Summary</h1>
        <p>{text.split(" ").length -1}words</p>
        <p>{0.008 * text.split(" ").length}minutes</p>
      </div>
    </>
  );
}

// Textfrom.defaultProps = {
//   heading: "Heading by default props"
// };
