import React from 'react';

import {Link} from 'react-router-dom';



import {Helmet} from 'react-helmet';


class State extends React.Component
{
    render()
    {
        const {data} = this.props;
        //console.log(this.props.zones);
        if(this.props.name==='state')
        {
            return(
                <tr style={{fontSize:'15px'}}>
                <th scope="row"><Link to={"/state/"+data.statecode} style={{textDecoration:'none'}}>{data.state}</Link></th> 
                <td>{data.deltaconfirmed >0 ? <span style={{fontSize:'12px',color:'red'}}>+{+data.deltaconfirmed} </span> : ''}{(+data.confirmed).toLocaleString()}</td>
                <td>{(+data.active).toLocaleString()}</td>
                <td>{data.deltarecovered >0 ? <span style={{fontSize:'12px',color:'green'}}>+{+data.deltarecovered} </span> : ''}{(+data.recovered).toLocaleString()}</td>
                <td>{data.deltadeaths >0 ? <span style={{fontSize:'10px'}}>+{+data.deltadeaths} </span> : ''}{(+data.deaths).toLocaleString()}</td>
              </tr>
            );
        }
        else
        {
            let cssClassName="badge ";
            this.props.zone==='Red' ? cssClassName+='badge-danger' : this.props.zone === 'Orange' ? cssClassName+='badge-warning' : 
            this.props.zone === 'Green' ? cssClassName+='badge-success' : cssClassName+='badge-secondary';
            return(
                <React.Fragment>
                    <Helmet>
                <meta charSet="utf-8"/>
                <title>
                    State Page
                </title>
                            </Helmet>
                <tr style={{fontSize:'15px'}}>
                                <th scope="row"><span className={cssClassName}>{this.props.zone} </span><strong style={{marginLeft:'5px'}}>{data.district}</strong></th> 
                <td>{data.delta.confirmed >0 ? <span style={{fontSize:'12px',color:'red'}}>+{+data.delta.confirmed} </span> : ''}{(+data.confirmed).toLocaleString()}</td>
                <td>{(+data.active).toLocaleString()}</td>
                <td>{data.delta.recovered >0 ? <span style={{fontSize:'12px',color:'green'}}>+{+data.delta.recovered} </span> : ''}{(+data.recovered).toLocaleString()}</td>
                <td>{data.delta.deceased >0 ? <span style={{fontSize:'12px',color:'black'}}>+{+data.delta.deceased} </span> : ''}{(+data.deceased).toLocaleString()}</td>
              </tr>
                </React.Fragment>
            );
        }
        
    }
}

export default State;