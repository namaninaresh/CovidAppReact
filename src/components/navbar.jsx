import React  from 'react';
import {Link} from 'react-router-dom';

import logoDark from './img/logo-dark.png';

import logoLight from './img/logo-light.png';

//import ReactDOM from 'react-dom';

class Navbar extends React.Component
{

      
    render()
    {
      let classess = "";
  
        if(this.props.mode)
          classess = "navbar navbar-expand-lg navbar bg-dark myfont mynav ";
        else
          classess = "navbar navbar-expand-lg navbar-light bg-light myfont ";

        return(

            <React.Fragment>
              <nav className={classess}>
  <Link className="navbar-brand" to="/"><img src={(this.props.mode) ? logoDark: logoLight} alt="logo"/> COVID-19</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
    <ul className="navbar-nav  mt-2 mt-lg-0 ">
      <li className="nav-item ">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/precautions">Precautions <span className="sr-only">(current)</span></Link>
      </li>
     
      <li className="nav-item ">
        <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
      </li><li className="nav-item ">
        <Link className="nav-link" to="#" onClick={this.props.modeChange}>{(this.props.mode) ? 'Light' : 'Dark'} Mode <span className="sr-only">(current)</span></Link>
      </li>
      
      
    </ul>
    
  </div>
</nav>

            </React.Fragment>


        );
    }
}

export default Navbar;