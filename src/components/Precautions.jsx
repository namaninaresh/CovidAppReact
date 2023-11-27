import React from 'react';

import Drycough from './precautions/drycough.png';

import Sorethroat from './precautions/sorethroat.png';

import Highfever from './precautions/highfever.png';

import publicgathering from './precautions/publicgathering.png';
import difficultybreathing from './precautions/breathproblem.png';

import aircoughs from './precautions/aircough.png';

import closecontacts from './precautions/closecontact.png';

import Sanitizer from './precautions/sanitizer.png';

import mask from './precautions/mask.png';

import distance from './precautions/distance.png';

import coverwithcloth from './precautions/coverwithcloth.png';

import right from './precautions/right.png';

import wrong from './precautions/wrong.png';

import contaminated from './precautions/contaminated.png';

import {Helmet} from 'react-helmet';


class Precautions extends React.Component
{
    render()
    {
        return(
            <React.Fragment>
                 <Helmet>
                <meta charSet="utf-8"/>
                <title>Precautions Page
                </title>
                </Helmet>
                <div className="container mt-3 myfont precautions">
                <div className="row ">
                <div className="col-md-6">
                        <div className="card bg-secondary text-white">
                            <div className="card-header">
                                    Symptoms
                            </div>
                            <div className="card-body symptoms ">
                            <div className="col" >
                                    <img src={Drycough} alt="drycough"/>
                                    <p >DRY COUGH</p>
                                </div>  <div className="col">
                                    <img src={Highfever} alt="high fever"/>
                                    <p>HIGH FEVER</p>
                                </div>  <div className="col">
                                    <img src={Sorethroat} alt="sore throat"/>
                                    <p>Sore Throat</p>
                                </div>  <div className="col">
                                    <img src={difficultybreathing} alt="difficulty in breathing"/>
                                    <p>Difficulty In Breathing</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card bg-info text-white rightcard">
                            <div className="card-header">
                                    How it spreads
                            </div>
                            <div className="card-body symptoms ">
                            <div className="col" >
                            <img src={publicgathering} className="img-fluid" alt="public gathering "/>
                                    <p >Public Gatering </p>
                                </div>  <div className="col">
                                    <img src={aircoughs} alt="air coughs"/>
                                    <p>Air Coughs</p>
                                </div>  <div className="col">
                                    <img src={closecontacts} alt="close contacts"/>
                                    <p>Close Contacts </p>
                                </div>  <div className="col">
                                    <img src={contaminated} alt="contaminated objects" style={{height:'80px'}}/>
                                    <p>Contaminated Objects</p>
                                </div> 
                            </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
                <div className="row mt-3">
                <div className="col-md-6">
                        <div className="card bg-dark text-white">
                            <div className="card-header">
                                    Preventions
                            </div>
                            <div className="card-body symptoms ">
                            <div className="col" >
                                    <img src={Sanitizer} alt="alcohol sanitizer"/>
                                    <p >Wash Your Hands With Alcohol Sanitizer</p>
                                </div>  <div className="col">
                                    <img src={mask} alt="mask" style={{paddingTop:'30px'}}/>
                                    <p>Wear Home Made Mask</p>
                                </div>  <div className="col">
                                    <img src={distance} alt="avoid contact img"/>
                                    <p>Avoid Contact With Sick Peope</p>
                                </div>  <div className="col">
                                    <img src={coverwithcloth} alt="cover with sneeze"/>
                                    <p>Always Cover When Cough or Sneeze</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card bg-light rightcard">
                           
                            <div className="card-body dosdont ">
                            <div className="dos">
                                        <ul className="list-group">
                                            <li className="list-group-item active"> Do's</li>
                                            <li className="list-group-item "> <img src={right} alt="right"/> Hand Wash</li>
                                            <li className="list-group-item "> <img src={right} alt="right"/> Cover Your Mouth & Nose</li>
                                            <li className="list-group-item "> <img src={right} alt="right"/> Consult A Doctor if Sick</li>
                                            <li className="list-group-item "> <img src={right} alt="right"/> Stay Indoors</li>
                                        </ul>
                                </div><div className="donts ">
                                        <ul className="list-group">
                                            <li className="list-group-item active warning" style={{backgroundColor:'#d05b5b',borderColor:'#d05b5b'}}> Don'ts</li>
                                            <li className="list-group-item "> <img src={wrong} alt="wrong"/> Avoid Close Contact with anyone</li>
                                            <li className="list-group-item "> <img src={wrong} alt="wrong"/> Do Not Spit</li>
                                            <li className="list-group-item "> <img src={wrong} alt="wrong"/> Do Not use Over the Counter Medicines</li>
                                            <li className="list-group-item "> <img src={wrong} alt="wrong"/> Don't Touch Your Face</li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
                
            </div>
            <footer className="footer precautionfooter py-3" style={{marginBottom:'-5%'}}>
            <div className="container"> 
              <div className="row">
                <div className="col justify-content-start apidetails">
                  <span className="text-muted" ><a href="https://github.com/indiacovid19info/api" style={{textDecoration: 'none'}}>API Data Soruce</a></span>
                </div><div className="col justify-content-end developedby" style={{textAlign: 'end'}}>
                  <span className="text-muted">Developed By: <a href="https://namaninaresh.github.io/" style={{textDecoration: 'none'}}>Naresh Namani</a></span>
                </div>
              </div>
          </div>
        </footer>
            </React.Fragment>
        );
    }
}

export default Precautions;