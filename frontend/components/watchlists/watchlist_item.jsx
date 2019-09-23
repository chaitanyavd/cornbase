import React from 'react'
import { Link } from 'react-router-dom'; 
// import { deleteWatchlist } from '../../actions/watchlist_actions';

class WatchlistItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (    
            <div>
                {this.props.watchlist.name}
                <button onClick={() => this.props.deleteWatchlist(this.props.watchlist.symbol)}>Delete</button>

            </div>
        )
    }
    
}

export default WatchlistItem