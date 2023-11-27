import React from 'react';



class CasesDisplay extends React.Component
{
    render()
    {

        const {data} = this.props;
        return(
            <React.Fragment>
                <div className="col casesdisplayer">
                <table className="table table-borderless">
                    <thead>
                        <tr className="titles">
                        <td className="confirmedColor titleconfirm">Confirmed</td>
                        <td  className="activeColor">Active</td>
                        <td  className="recoveredColor">Recovered</td>
                        <td  className="deathsColor">Deaths</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="deltadata">
                        <td  className="confirmedColor">[ +{(+data.deltaconfirmed).toLocaleString()} ]</td>
                        <td>-</td>
                        <td className="recoveredColor">[+{(+data.deltarecovered).toLocaleString()}]</td>
                        <td className="deathsColor">[+{(+data.deltadeaths).toLocaleString()}]</td>
                        </tr>
                        <tr className="total">
                        <td>{(+data.confirmed).toLocaleString()}</td>
                        <td>{(+data.active).toLocaleString()}</td>
                        <td>{(+data.recovered).toLocaleString()}</td>
                        <td>{(+data.deaths).toLocaleString()}</td>
                        </tr>
                        
                    </tbody>
                    </table>
                </div>

            </React.Fragment>
        );
    }
}







export default CasesDisplay;