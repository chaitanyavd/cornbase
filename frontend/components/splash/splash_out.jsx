import SplashOutItem from './splash_out_item';
import CoinIndexItem from '../coins/coin_index_item'; 
import Watchlist from '../watchlists/watchlist'; 
import Portfolio from "../portfolio/portfolio"; 
import React from "react";

class SplashOut extends React.Component {
    
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {email: ''}
    }
    
    componentDidMount() {
        this.props.fetchCoins(); 
        // this.props.fetchWatchlists();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        this.props.history.push({pathname: "/signup", email: this.state})
    }

    render() {


        const { coins, currentUser } = this.props;

        const mapper = coins.map((coin, idx) => {
            if (idx <= 4 && coin.rank <= 5) {
                return <SplashOutItem coin={coin} orderNum={idx} key={coin.id} />
                // return  <CoinIndexItem coin={coin} key={idx} orderNum={idx} />
            } else {
                return null
            }
        });


    

        const loggedOut = () => (
            <div className="splashout-container">
                <div className="splashout-home-backdrop">
                    <div className="splashout-header-section">
                        <div className="splashout-header-container">
                            <h2 className="splashout-title">Buy and sell cryptocorns</h2>
                            <p className="splashout-para" >"Cornbase is the easiest place to buy, sell, and manage your cryptocorn portfolio."</p>
                            <form  onSubmit = {this.handleSubmit} className="splashout-get-started-form">
                                <input className="splashout-email" type="email" placeholder="Email address" spellCheck="false" value = {this.state.email} onChange = {this.update('email')}/>
                                <button className="splashout-button" ><span className="splashout-button-text">Get Started</span></button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="splashout-table-backdrop" >
                    <div className="splashout-table-container">
                        <table className="splashout-table" >

                            <colgroup>
                                <col style={{ width: "32px" }} />
                            </colgroup>

                            <thead className="splashout-table-head">
                                <tr>
                                    <th className="splashout-tablehelpers">
                                        <div className="splashout-tablehelper-div">
                                            <span className="tablehead">#</span>
                                        </div>
                                    </th>
                                    <th className="splashout-tablehelpers">
                                        <div className="splashout-tablehelper-div">
                                            <span className="tablehead">NAME</span>
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

                                </tr>

                            </thead>
                            <tbody className="t-body">
                                {mapper}
                            </tbody>

                        </table>

                    </div>
                </div>

                <div id = "external-links">
                    <a href="https://www.linkedin.com/in/chaitanya-desai-4602a6119/" target="_blank">
                        <svg className = "link-svg" width="50" height="50" viewBox=" 0 0 24 23">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" stroke="rgb(22, 82, 240)" fill="rgb(22, 82, 240)" > </path>
                        </svg>  
                    </a>

                    <a href="https://github.com/chaitanyavd" target = "_blank">
                        <svg className = "link-svg" width="50" height="50" viewBox=" 0 0 24 23">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" stroke="rgb(22, 82, 240)" fill="rgb(22, 82, 240)" > </path>
                        </svg>  
                    </a>

                    <a href="mailto:chaitanya.v.de@gmail.com" target = "_blank">
                        <svg className = "link-svg" width="50" height="50" viewBox=" 0 0 24 23">
                                <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" stroke="rgb(22, 82, 240)" fill="rgb(22, 82, 240)" > </path>
                        </svg>  
                    </a>
                    
                </div>
            </div>
        )

        const loggedIn = () => {
            return (
            <div className = "homepage-container">
                <Portfolio/> 
                <Watchlist  watchlists = {this.props.watchlists} fetchWatchlists = {this.props.fetchWatchlists} deleteWatchlist = {this.props.deleteWatchlist}/>
            </div>
            )
        }


        return  currentUser ? loggedIn() : loggedOut();
        // return  loggedOut(); 
        
    }

}


export default SplashOut
