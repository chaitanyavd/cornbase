
import React from 'react'; 
import { Link } from 'react-router-dom'; 

class WatchlistGridItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { watchlist, deleteWatchlist, orderNum } = this.props;


        if (this.props.watchlist === undefined) return null;

        let price = watchlist.price ? parseFloat(watchlist.price) > 0.1 ? parseFloat(watchlist.price).toFixed(2) : parseFloat(watchlist.price).toFixed(4) : null
        let marketCap = watchlist.market_cap ? parseFloat(watchlist.market_cap) > 1000000000 ? `$${(parseFloat(watchlist.market_cap) / 1000000000).toFixed(1)}B` : `$${(parseFloat(watchlist.market_cap) / 1000000).toFixed(1)}M` : null
        let percent = watchlist.price ? parseFloat((watchlist["1d"].price_change_pct) * 100).toFixed(2) : null
        let color = watchlist.price ? percent >= 0 ? 'pospercent' : 'negpercent' : null
        let fill = "rgb(244, 198, 34)"
        let stroke = "rgb(244, 198, 34)"

        return (
                <div>
                    
                </div>
        )
    }
    
}

export default WatchlistGridItem; 
