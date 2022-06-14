import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
   
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid" >  
    <a className="navbar-brand"  role="button" >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          {/* <Link className="nav-link mx-2" to="/text" >HOME</Link> */}
          <a className="nav-link mx-2" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#" >ABOUT</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link mx-2" role="button" onClick={props.change} >ENABLE LIGHT MODE</a>
        </li>
       <li>
       <div className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.btntext}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item"  role="button" onClick={props.change1}>ENABLE RED DARK MODE</a></li>
            <li><a className="dropdown-item"  role="button" onClick={props.change2}>ENABLE GREEN DARK MODE</a></li>
            <li><a className="dropdown-item"  role="button" onClick={props.change3}>ENABLE BLUE DARK MODE</a></li>
            </ul>
            </div>
       </li>
    
             </ul>
          </div>
    {/* <div className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'} `}>
      <input className="form-check-input" onClick={props.change} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btntext}</label>
    </div> */}

    {/* <div className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'} `}>
      <input className="form-check-input" onClick={props.change1} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btntext}</label>
    </div>

    <div className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'} `}>
      <input className="form-check-input" onClick={props.change2} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btntext}</label>
    </div>

    <div className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'} `}>
      <input className="form-check-input" onClick={props.change3} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btntext}</label>
    </div> */}




  </div>
</nav>
    
      
  )
}
Navbar.propTypes= {  title: PropTypes.string
}