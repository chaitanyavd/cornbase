import React from 'react'
import WatchlistListItem from './watchlist_list_item';
import WatchlistGridItem from './watchlist_grid_item'; 


class Watchlist extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchWatchlists(); 
    }
    
    render() {

        if (this.props.watchlists === undefined) return null;
        const {watchlists, deleteWatchlist, fetchDay, data} = this.props
        // debugger
        const listFill =
          this.props.grid
            ? "rgb(190, 202, 218)"
            : "rgb(22, 82, 240)";
        
        const gridFill =
          !this.props.grid
            ? "rgb(190, 202, 218)"
            : "rgb(22, 82, 240)";
        
        const listMapper =  watchlists.map((watchlist, idx) => <WatchlistListItem fetchDay = {fetchDay}watchlist={watchlist} deleteWatchlist={deleteWatchlist} orderNum={idx} key={idx} />) 
        const gridMapper =  watchlists.map((watchlist, idx) => <WatchlistGridItem watchlist={watchlist} data = {data}fetchDay = {fetchDay} deleteWatchlist={deleteWatchlist} orderNum={idx} key={idx} />) 
        
        let view; 
        if (!this.props.grid) { view = 
            <div id="watchlist-list-container">
                <div id="watchlist-list-wrapper">
                    <table id="watchlist-table">
                        <thead className="splashout-table-head">

                            <tr>
                                <th className="splashout-tablehelpers">
                                    <div className="splashout-tablehelper-div">
                                        <span className="tablehead">#</span>
                                    </div>
                                </th>
                                <th className="splashout-tablehelpers">
                                    <div className="splashout-tablehelper-div">
                                        <span className="tableheadname">NAME</span>
                                    </div>
                                </th>
                                <th className="splashout-tablehelpers">
                                    <div className="splashout-tablehelper-div">
                                        <span className="tablehead">PRICE</span>
                                    </div>
                                </th>
                                <th className="splashout-tablehelpers">
                                    <div className="splashout-tablehelper-div">
                                        <span className="tablehead">CHANGE</span>
                                    </div>
                                </th>
                                <th className="splashout-tablehelpers">
                                    <div className="splashout-tablehelper-div">
                                        <span className="tablehead">MARKET CAP</span>
                                    </div>
                                </th>
                                <th className="splashout-tablehelpers">
                                    <div className="splashout-tablehelper-div">
                                        <span className="tablehead">FOLLOW</span>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody className="t-body">
                            {listMapper}
                        </tbody>

                    </table>
                </div>
            </div>     
        } else { view = 
            <div id="watchlist-grid-container">
                {gridMapper}
            </div>
        }

        return (
          <div id="watchlist-container">
            <div id="watchlist-header-wrapper">
              <div id="watchlist-title-wrapper">
                <h2 id="watchlist-header">
                  <span>Following</span>
                </h2>
              </div>
              <div id="widget-header-wrapper">
                <span id="widgetss">
                  <button
                    className="watchlist-button"
                    onClick={() =>
                      this.props
                        .openGrid()
                    }
                  >
                    <svg
                      id="grid-svg"
                      height="18"
                      width="18"
                      viewBox="0 0 18 18"
                    >
                      <path
                        d="M7.044 0H.783A.783.783 0 0 0 0 .783v6.26c0 .433.35.783.783.783h6.26c.433 0 .783-.35.783-.782V.783A.783.783 0 0 0 7.044 0zM17.218 0h-6.261a.783.783 0 0 0-.783.783v6.26c0 .433.35.783.783.783h6.26c.433 0 .783-.35.783-.782V.783A.783.783 0 0 0 17.217 0zM7.044 10.174H.783a.783.783 0 0 0-.783.782v6.261c0 .433.35.783.783.783h6.26c.433 0 .783-.35.783-.783v-6.26a.783.783 0 0 0-.782-.783zM17.218 10.174h-6.261a.783.783 0 0 0-.783.782v6.261c0 .433.35.783.783.783h6.26c.433 0 .783-.35.783-.783v-6.26a.783.783 0 0 0-.783-.783z"
                        fill={gridFill}
                      >
                        {" "}
                      </path>
                    </svg>
                  </button>
                  <button
                    className="watchlist-button"
                    onClick={() =>
                      this.props
                        .closeGrid()
                    }
                  >
                    <svg
                      id="list-svg"
                      height="16"
                      width="19"
                      viewBox="0 0 19 16"
                    >
                      <path
                        d="M0 10.286c0 .63.512 1.143 1.143 1.143h16.714a1.143 1.143 0 0 0 0-2.286H1.143C.512 9.143 0 9.655 0 10.286zm0 4.571C0 15.488.512 16 1.143 16h16.714a1.143 1.143 0 0 0 0-2.286H1.143c-.631 0-1.143.512-1.143 1.143zm0-9.143c0 .631.512 1.143 1.143 1.143h16.714a1.143 1.143 0 1 0 0-2.286H1.143C.512 4.571 0 5.083 0 5.714zM1.143 0a1.143 1.143 0 1 0 0 2.286h16.714a1.143 1.143 0 1 0 0-2.286H1.143z"
                        fill={listFill}
                      >
                        {" "}
                      </path>
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            {view}
          </div>
        );
    }
}

export default Watchlist

