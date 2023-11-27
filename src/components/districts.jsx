import React from 'react';


class District extends React.Component
{

    render()
    {
        const {style} = this.props;
        const {data} = this.props;
        return(
            <div className="district mt-1" >
            <div className="area" style={style.area}>
                <div>
                <span className={this.props.zone === 'Orange' ? 'badge badge-warning' : this.props.zone === 'Red' ? 'badge badge-danger' : this.props.zone ==='Green' ? 'badge badge-success' : 'badge badge-secondary'} style={{marginRight:'5px'}}>{this.props.zone} </span>
                </div>
                <div className="areaName" style={style.areaName}>
                        {" "+data.district}
                </div>
                <div className="areaTotal">
                    {data.confirmed} 
                </div>

          </div>
          </div>
        );
    }
}


export default District;