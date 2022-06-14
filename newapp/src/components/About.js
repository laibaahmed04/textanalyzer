import React from 'react'

export default function About(props) {
  return (
    <div className="container my-3 " >
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={{backgroundColor:props.mode ==='light'?'white':'#051328' , color:props.mode ==='light'?'#051328' : 'white'}}>
            LOWER CASE 
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{backgroundColor:props.mode ==='light'?'white':'#051328' , color:props.mode ==='light'?'#051328' : 'white'}}>
        <div className="accordion-body" >
            <strong >This button will change the text to small letters.</strong> It is useful when you write something in capital letters by mistake and don't want to rewrite the whole text
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:props.mode ==='light'?'white':'#051328' , color:props.mode ==='light'?'#051328' : 'white'}}>
            UPPER CASE
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{backgroundColor:props.mode ==='light'?'white':'#051328' , color:props.mode ==='light'?'#051328' : 'white'}}>
        <div className="accordion-body">
        <strong  >This button will change the text to capital letters.</strong> It is useful when you write something in small letters by mistake and don't want to rewrite the whole text
        </div>
        </div>
    </div>
    </div>




    </div>
  )
}
