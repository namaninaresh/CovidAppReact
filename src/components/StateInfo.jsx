import React from 'react';

import CasesDisplay from './Display';

import State from './state';

import {AboutInfo} from './AboutInfo';

import '../vendor/style.css';


import moment from  'moment';

class StateInfo extends React.Component
{
    state ={
        currentState :[],
        districts :[],
        tested:[],
        zones:[],

    }
    componentDidMount(){
        this.setState({tested:this.props.getStateTestData(this.props.match.params.code)});
        const {statewise} = this.props;
        const current=  statewise.filter(s => s.statecode === this.props.match.params.code)[0];
        const currentState = current=== undefined ? {} : current;
        //this.setState({currentState});
        
        const {districtwise} = this.props;
       
        const d = districtwise.filter(d=>d.statecode === this.props.match.params.code);
         let district = [];   
        if(d.length !==0) district = d[0]['districtData'];

       // console.log(district);
        this.setState({districts:district,currentState,zones:this.props.zones});
    }

    getzones=districtname=>{
        const zones = [...this.state.zones];
        const zone = zones.filter(district => district.district===districtname);

        return zone.length>0 ? zone[0].zone : 'none';

    }
    render()
    {
        let servertime = this.state.currentState.lastupdatedtime;
        let updatedTime =0;
        if(typeof servertime === 'string')
          updatedTime = servertime.replace(" ","T");
 

        return(

            <div className="container myfont" >
                
                <div className="row mt-3 pl-3">
                <div className="currentpage">
                         <p className="name">India / {this.state.currentState.state}</p>
                         <p className="update">Last updated {moment(updatedTime,"DD/MM/YYYYTHH:mm:ss").fromNow()}</p>
                     </div>
                </div>
                <div className="row">
                    <div className="col" >
                                <div className="row" >
                                <div className="casesDisplayer" >
                                 <CasesDisplay key={this.currentState} data={this.state.currentState}/>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <div className="total states mt-3 ">
                                <table className="table table-bordered">
                                <thead>
                                <tr style={{overflow:'hidden',fontSize:'10px'}}>
                                <th scope="col" style={{width:'40%'}}>Districts</th>
                                <th scope="col" className="confirmedColor">Confirmed</th>
                                <th scope="col" className="activeColor">Active</th>
                                <th scope="col" className="recoveredColor">Recovered</th>
                                <th scope="col" className="deathsColor">Deaths</th>
                                </tr>
                                </thead>
                                <tbody>
                {this.state.districts.map(d=><State zone={this.getzones(d.district)} name="district" key={d.district} style={this.style} data={d} />)}
                                </tbody>
                            </table>
                            </div>
                                    </div>
                                </div>
                                
                    </div>
                    <div className="col-md-4">
                            <AboutInfo data={this.state.tested} stateData ={this.state.currentState} name="state"/>
                    </div>
                    
                  
                     
            </div>
             </div>
                           
          

        )
    }
}

export default StateInfo;