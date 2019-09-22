import React from 'react'
import WatchlistItem from './watchlist_item'; 

class Watchlist extends React.Component {
    constructor(props) {
        super(props)

    }
    
    

    render(){
        if (this.props.watchlists === undefined) return null;
        
        const {watchlists, deleteWatchlist} = this.props
        // debugger

        return (
            <div id="watchlist-container">
                {watchlists.map((watchlist, idx) => <WatchlistItem watchlist={watchlist} deleteWatchlist = {deleteWatchlist} key={idx} />)}
            </div>
        )
    }
}

export default Watchlist

