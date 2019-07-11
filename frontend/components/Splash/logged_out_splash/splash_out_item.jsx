import React from "react";
import { parse } from "querystring";
import { Link } from 'react-router-dom'; 

class SplashOutItem extends React.Component {

    
    render () {

        if (this.props.coin === undefined) return null;
        const {coin} = this.props.coin

        let price = parseFloat(this.props.coin.price) > 0.1 ? parseFloat(this.props.coin.price).toFixed(2) : parseFloat(this.props.coin.price).toFixed(4)
        let percent = parseFloat((this.props.coin["1d"].price_change_pct) * 100).toFixed(2);
        let color = percent >= 0 ? 'pospercent' : 'negpercent'

        return (
            <tr className= "t-row-container ">
                <td className="splashout-tablerow-1">
                    <h4 className="splashout-tablerow-1id" >{this.props.orderNum + 1}</h4>
                </td>
                
                <td className="splashout-tablerow-2">
                    <Link className = "splashout-link"to = {"/signup"}>
                        <div className="splashout-tablerow-name-container">
                            
                            <div className="splashout-tablerow-img">
                                <img className = "img"src={`${this.props.coin.logo_url}`} width="32" height="32" />
                            </div>

                            <div className="splashout-tablerow-name">
                                <span className="tr-title-span"> 
                                    <h4 className="tr-title" >{this.props.coin.name}</h4>
                                </span>

                                <h4 className="tr-symbol" >{this.props.coin.symbol}</h4>
                            </div>
                        </div>
                    </Link>
                </td>

                <td className="splashout-tablerow-3">
                    <div className="tr-price-container">
                        <h4 className="tr-price">${price}</h4>
                    </div>
                </td>

                <td className="splashout-tablerow-4">
                    <div className="tr-percent-container">
                        <span className="tr-percent">{percent}%</span>
                    </div>
                </td>

            </tr>
        )
    }
}

export default SplashOutItem

