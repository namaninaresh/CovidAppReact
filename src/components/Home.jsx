import React from 'react';

import CasesDisplay from './Display';

import State from './state';
import {AboutInfo} from './AboutInfo';


import {Helmet} from 'react-helmet';

import moment from  'moment';

class Home extends React.Component
{

    render()
    {
        const {india} = this.props.data;
        const {tested} = this.props.data;
        const {statewise} = this.props.data;
        let a = india.lastupdatedtime;
        let updatedTime =0;
        if(typeof a === 'string')
          updatedTime = a.replace(" ","T");
 

        
        return (
            <React.Fragment>
              <Helmet>
                <meta charSet="utf-8"/>
                <title>
                    COVID 19 India
                </title>
                            </Helmet>
                <div className="container mt-3 myfont" >
                <div className="row">
                                
                </div>
                <div className="row mt-3 pl-3">
                     <div className="currentpage">
        <p className="name">{this.props.data.default} </p>
                         <p className="update">Last updated on {moment(updatedTime,"DD/MM/YYYYTHH:mm:ss").fromNow()}</p>
                         
                     </div>
                </div>
                <div className="row">
                    <div className="col" >
                                <div className="row" >
                                <div className="casesDisplayer" >
                                        <CasesDisplay key={india} data={india}/>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col mt-3">
                                <table className="table table-bordered">
                                <thead>
                                <tr style={{overflow:'hidden',fontSize:'10px'}}>
                                <th scope="col" style={{width:'40%'}} className="state">State</th>
                                <th scope="col" className="confirmedColor">Confirmed</th>
                                <th scope="col" className="activeColor">Active</th>
                                <th scope="col" className="recoveredColor">Recovered</th>
                                <th scope="col" className="deathsColor">Deaths</th>
                                </tr>
                                </thead>
                                <tbody>
                                {statewise.map(s=> <State name="state"  key={s.statecode}  data={s} />)}

                                </tbody>
                            </table>
                            </div>
                                </div>
                                
                    </div>
                   <div className="col-md-4">
                   <div className="row">
                    <div className="col">
                            <AboutInfo data={tested} name="india" />
                    </div>
                      </div>
                      <div className="row">
                      <div className="col">
                           
                      </div>
                      </div>
                     </div>
                  
                     
            </div>
             </div>
             <footer className="footer mt-auto py-3 " style={{marginBottom:'-5%'}}>
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
export default Home;