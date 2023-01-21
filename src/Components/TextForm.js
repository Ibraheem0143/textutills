import React, {useState} from 'react'



export default function TextForm(props) {
    const[text, setText] = useState('');
    const handleonchange =(event)=>{
        console.log("HELLO");
       
        setText(event.target.value);
    }
    const handleupclick =()=>{
        console.log("oaooa");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to Upper case." , "success");

        

    }

    const handleloclick =()=>{
        console.log("oaooa");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to lower case." , "success");
        

    }

    const handlecopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Text has been copied to clipboard." , "success");

    }

  return (
    <>
    <div className="container" style={{color : props.mode==='light'?'#042743':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} 
        style={{backgroundColor : props.mode==='light'?'white':'grey', color : props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleupclick}> Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}> Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}> Copy Text</button>

    </div>
    <div className="container my-2" style={{color : props.mode==='light'?'#042743':'white'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Mintes To Read.</p>
        <h3>Preview</h3>
        <p>{text}</p>
        
    </div>
  </>
  )
}
