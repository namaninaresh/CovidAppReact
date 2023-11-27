import React from 'react';

import {Helmet} from 'react-helmet';


class AboutInfo extends React.Component
{
    state ={
        tested:{}
    }


    render()
    {
        const {data} = this.props;
        
        if(this.props.name==='india')
        {
            return(
                <div style={{paddingLeft:'20px'}}>
                    <div className="alert alert-primary" role="alert">
                        <div>
                        <h6> Total Samples Tested :</h6> {(+data.totalsamplestested).toLocaleString()}
                        </div>
                        <div><hr/>
                        <h6> Today Samples Reported :</h6> {(+data.samplereportedtoday).toLocaleString()}
                        </div>
      
    
                            </div>
                </div>
            );
        }
        else
        {
            const {stateData} = this.props;
            
                if((data !== undefined) && !(data instanceof Array))
                {
                    return(
                        <div style={{paddingLeft:'20px'}}>
                            <div className="alert alert-primary" role="alert">
                                <div>
                                    <h6> Total Population : {(+data.populationncp2019projection).toLocaleString()} </h6>
                                </div>
                                <hr></hr>
                                <div>
                                <h6> Total  Tested : {(+data.totaltested).toLocaleString()} </h6> 
                                </div>

                                
                                <hr></hr>
                                <div>
                                    
                                <h6> Confirmed Rate : {(+(stateData.confirmed/data.populationncp2019projection)*1000000).toFixed(2)} </h6>
                    <small>-In every 1 million people {(Math.round((stateData.confirmed/data.populationncp2019projection)*1000000))} are tested postive</small>
                                </div>
                                    <hr></hr>
                                <div>
                                <h6> Active Rate : {(+(stateData.active/stateData.confirmed)*100).toFixed(2)}  %</h6>
                    <small>-In every 100 cases {(+(stateData.active/stateData.confirmed)*100).toFixed(2)} are infected</small>
                                </div>
                                    <hr></hr>
                                <div>
                                <h6> Recovered Rate : {(+(stateData.recovered/stateData.confirmed)*100).toFixed(2)}  %</h6>
                    <small>-In every 100 cases {(+(stateData.recovered/stateData.confirmed)*100).toFixed(2)} are recovered</small>
                                </div>
                                    <hr></hr>
                                <div>
                                <h6> Deaths Rate : {(+(stateData.deaths/stateData.confirmed)*100).toFixed(2)}  %</h6>
                    <small>-In every 100 cases {Math.round(+(stateData.deaths/stateData.confirmed)*100)} have passed away</small>
                                </div>
                                <hr></hr>
                                
                                <div>
                                <h6 style={{fontSize:'10px'}}> Last Updated : {data.updatedon} </h6>
                                </div>
              
            
                                    </div>
                        </div>
                    );
                }
                return(
                    <h4>No Data</h4>
                );
            
        }

        

    }
}



class About extends React.Component
{
    render()
    {
        return(
            <React.Fragment>
                 <Helmet>
                <meta charSet="utf-8"/>
                <title>About Page
                </title>
                </Helmet>
                <div className="container mt-3 about">
                        <div className="row">
                            <div className="col">
                                    <div className="jumbotron jumbotron-fluid pl-5 pr-3 pb-3">
                                        <h2 className="display-6">About <strong style={{color:'#e67791'}}>COVID-19</strong> </h2><hr></hr>
                                        <p className="lead" style={{fontSize:'15px'}}> About the Disease how it spreaded </p>
                                    </div>
                            </div>
                        </div>
                        <div className="row"  >
                            
                            <div className="col-md-6">
                            <table className="table table-bordered table-dark">
                                                <thead>
                                                    <tr>
                                                    <th scope="col" style={{width:'35%'}}>Date</th>
                                                    <th scope="col">Event</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{fontSize:'15px'}}>
                                                    <tr>
                                                    <th scope="row">31 - Dec -2019</th>
                                                    <td>First case in Wuhan as Unknown Virus Attack</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">01 - Jan - 2020</th>
                                                    <td>Protective Measures Where first applied in India and Began thermal Screening of Passengers</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">30 - Jan - 2020 </th>
                                                    <td>India First Report in kerala.</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">03 - Feb - 2020 </th>
                                                    <td>3 Cases more in Kerala.</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">11 - Feb - 2020 </th>
                                                    <td>WHO named it as "COVID-19"</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">03 - Mar - 2020 </th>
                                                    <td>Stopped issueing ViSA and Compulsary Screening</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">17 - Mar - 2020 </th>
                                                    <td>Goverment Of India issueing Social Distancing and warning about Mass Gathering.</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">22 - Mar - 2020 </th>
                                                    <td>14-hours Voluntary Public Curfew.</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">24 - Mar - 2020 </th>
                                                    <td>NationWide Lockdown for 21 days Effecting entire (1.3 billion) people.</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">24 - Mar - 2020 </th>
                                                    <td>15,000 Crore package   to Strengthen healthcare sector.This money would be used for developing testing  facilities PPEs ICUs , Ventilators</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">14 - Apr - 2020 </th>
                                                    <td>Lockdown Extended till 3rd May.</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">03 - Apr - 2020 </th>
                                                    <td>turn off lights for 9 Mins and Candles on 5th April</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">29 - Apr - 2020 </th>
                                                    <td>InterState Movement for Stranded Persons.</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">30 - Apr - 2020 </th>
                                                    <td>Lockdown Extended till 31st May.</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">12 - May - 2020 </th>
                                                    <td>Announced Economic Package of 20 Lakh Crore for "Atma Nirbar Bharat"(Self-Reliant -Nation).It is nearly 10% of GDP and it is for Labourers,Farmers,honest tax payers,MSMEs & Cottage Industries</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">31 - May - 2020 </th>
                                                    <td>Lockdown 5.0 upto June 30</td>
                                                    </tr>
                                                    
                                                </tbody>
                                                </table>
                            </div>
                            <div className="col">
                                    <div className="row">
                                        <div className="col">
                                        <ul className="list-group who-info">
                                <li className="list-group-item active">World Health Organization (WHO)</li>
                                <li className="list-group-item">A pneumonia of unknown cause detected in Wuhan,China was first reported to the WHO Country Office in China on <strong>31 December 2019</strong>.</li>
                                <li className="list-group-item">WHO analyse data ,and worked about it.</li>
                                <li className="list-group-item">The outbreak was declared a Public Health Emergency of International Concern on <strong>30 January 2020</strong></li>
                                <li className="list-group-item">On <strong>11 February 2020</strong>, WHO announced a name for the new corono disease as "COVID-19"</li>
                                </ul>
                                        </div>
                                        
                                    </div>
                            </div>
                            
                            
                        </div>
            </div>
            <footer className="footer mt-auto py-3 mt-4" style={{marginBottom:'-5%'}}>
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

export {
    About,
    AboutInfo
};
