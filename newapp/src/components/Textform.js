import React , {useState} from 'react'


export default function Textform(props) {
    const [text, setText ] = useState("ENTER YOUR TEXT");
    const [font, setTextStyle] = useState('lighter');
    const handlefunc=()=>{
        let newtext=text.toUpperCase();
         setText(newtext)
    }
    const handleonchange=(event)=>{
        console.log("OKAY")
         setText(event.target.value);
    }
    const handlefunc1=()=>{
        let newtext1=text.toLowerCase();
         setText(newtext1)
    }
    const handlefunc3=()=>{
            setTextStyle('lighter')
            }
    const handlefunc4=()=>{
               setTextStyle('Bold')
                }
  const handlefunc5=()=>{
    let newtext="";
    setText(newtext)
                   }
      
    return (
      <>
   <div className="container"> 
   <div className="mb-3">
     <br/>
      <h1 style={{color:props.mode ==='dark'?'white' : '#051328'}}>{props.heading}</h1>
       <textarea className="form-control"value={text} id="text" onChange={handleonchange} style={{backgroundColor:props.mode ==='dark'?'#242828' : 'rgb(211 255 241)' , color:props.mode ==='dark'?'white' : '#051328' ,fontWeight:font }} rows="8" column="4"></textarea>
 </div>
  <button className="btn2 mx-2" onClick={handlefunc}>CONVERT TO UPPERCASE</button>
  <button className="btn1 mx-2" onClick={handlefunc1}>CONVERT TO LOWERCASE</button>
   <button className="btn5 mx-2" onClick={handlefunc4}>CONVERT TO BOLD TEXT</button>
   <button className="btn4 mx-2" onClick={handlefunc3}>CONVERT TO DEFAULT TEXT</button>
  <button className="btn5 mx-2" onClick={handlefunc5}>CLEAR TEXT</button>
  </div>  
   <div className="container my-3">
     <h2 style={{color:props.mode ==='dark'?'white' : '#051328'}}>SUMMARY</h2>
   <p style={{color:props.mode ==='dark'?'white' : '#051328'}}>
     {text.split(" ").length} words and {text.length} letters
   </p>
   <p style={{color:props.mode ==='dark'?'white' : '#051328'}}>
     {text.split(" ").length*0.008} MINUTES 
   </p>
   </div>
   <div className="container">

   </div>
 
</>
  )
}
