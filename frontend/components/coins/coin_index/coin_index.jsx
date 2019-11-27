import React from "react";
import CoinIndexItem from "./coin_index_item";
import { GridLoader } from "halogenium";

class CoinIndex extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { inputValue: "" };
    this.selectCoin = this.selectCoin.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchCoins();
    this.props.fetchWatchlists();
  }

  handleInput(e) {
    this.setState({ inputValue: e.currentTarget.value });
  }

  matches() {
    const matches = [];
    if (this.state.inputValue.length === 0) {
      return this.props.coins;
    }

    this.props.coins.forEach(coin => {
      const sub = coin.name.slice(0, this.state.inputValue.length);
      if (sub.toLowerCase() === this.state.inputValue.toLowerCase()) {
        matches.push(coin);
      }
    });

    if (matches.length === 0) {
      matches.push("Search for another Corn");
    }

    return matches;
  }

  selectCoin(e) {
    const coin = e.currentTarget.innerText;
    this.setState({ inputValue: coin.name });
  }

  render() {
    const {
      coins,
      fetchCoin,
      fetchYear,
      data,
      createWatchlist,
      deleteWatchlist,
      watchlists
    } = this.props;
    
    const results = this.matches().map((coin, idx) => {
      return (
        <CoinIndexItem
          coin={coin}
          watchlists={watchlists}
          key={idx}
          orderNum={idx}
          onClick={this.selectCoin}
          createWatchlist={createWatchlist}
          deleteWatchlist={deleteWatchlist}
        />
      );
    });

    return (
      <div className="index-page-content">
        <div className="index-table-container">
          {/* <span className="index-table-top" >Top cryptocurrency prices</span> */}
          <section className="index-table-search-section">
            <div className="index-table-search-div">
              <input
                className="search"
                onChange={this.handleInput}
                value={this.state.inputVal}
                placeholder="Search all assets..."
              />
            </div>
          </section>
          <table className="index-table">
            <tbody>
              <tr>
                <th className="tableheader">Available on Cornbase</th>
              </tr>

              <tr className="tabletitles">
                <th className="ttitles">#</th>
                <th className="ttitles">NAME</th>
                <th className="ttitles"></th>
                <th className="ttitles">PRICE</th>
                <th className="ttitles">CHANGE</th>
                <th className="ttitles">MARKET CAP</th>
                <th className="ttitles">FOLLOW</th>
              </tr>

              {results}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CoinIndex;
