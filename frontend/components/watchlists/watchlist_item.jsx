import React from 'react'
import { Link } from 'react-router-dom'; 
// import { deleteWatchlist } from '../../actions/watchlist_actions';

class WatchlistItem extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.watchlist
        {/* <button onClick={() => deleteWatchlist(watchlist.symbol)}>Delete</button> */}
    }

    render () {
        const {watchlist, deleteWatchlist, orderNum} = this.props; 


        if (this.props.watchlist === undefined) return null;

        let price = watchlist.price ? parseFloat(watchlist.price) > 0.1 ? parseFloat(watchlist.price).toFixed(2) : parseFloat(watchlist.price).toFixed(4) : null
        let marketCap = watchlist.market_cap ? parseFloat(watchlist.market_cap) > 1000000000 ? `$${(parseFloat(watchlist.market_cap) / 1000000000).toFixed(1)}B` : `$${(parseFloat(watchlist.market_cap) / 1000000).toFixed(1)}M` : null
        let percent = watchlist.price ? parseFloat((watchlist["1d"].price_change_pct) * 100).toFixed(2) : null
        let color = watchlist.price ? percent >= 0 ? 'pospercent' : 'negpercent' : null
        let fill = "rgb(244, 198, 34)"
        // let stroke = "#becada"
        let stroke = "rgb(244, 198, 34)"


        
        return (    
            <tr className="t-row-container ">
                <td className="splashout-tablerow-1">
                    <h4 className="splashout-tablerow-1id" >{this.props.orderNum + 1}</h4>
                </td>

                <td className="splashout-tablerow-2">
                    <Link className="splashout-link" to={"/signup"}>
                        <div className="splashout-tablerow-name-container">

                            <div className="splashout-tablerow-img">
                                <img className="img" src={`${this.props.watchlist.logo_url}`} width="32" height="32" />
                            </div>

                            <div className="splashout-tablerow-name">
                                <span className="tr-title-span">
                                    <h4 className="tr-title" >{this.props.watchlist.name}</h4>
                                </span>

                                <h4 className="tr-symbol" >{this.props.watchlist.symbol}</h4>
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
                        <span className={color}>{percent}%</span>
                    </div>
                </td>
                <td className="splashout-tablerow-5">
                    <div className="tr-marketcap-container">
                        <span>{marketCap}</span>
                    </div>
                </td>
                <td className="splashout-tablerow-4">
                    <div className="tr-follow-container">
                        <svg width="23" height="24" viewBox=" 0 0 24 23">
                            <path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 0 1 .44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 0 1-1.152.837L12 18.787l-5.938 3.121a.795.795 0 0 1-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 0 1 .44-1.354l6.638-.965 2.968-6.015a.795.795 0 0 1 1.425 0z" stroke={stroke} fill={fill}> </path>
                        </svg>  
                    </div>
                </td>

            </tr>
            )
    }
    
}

export default WatchlistItem

