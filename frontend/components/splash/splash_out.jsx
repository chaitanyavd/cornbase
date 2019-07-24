import SplashOutItem from './splash_out_item';
import React from "react";

class SplashOut extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {email: ''}
    }
    
    componentDidMount() {
        this.props.fetchSplashCoins();
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
            if (idx <= 4) {
                return <SplashOutItem coin={coin} orderNum={idx} key={coin.id} />
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
            </div>
        )

        const loggedIn = () => (
            <div className = "wip-container">
                <img className="wip-img" src="https://static-assets.coinbase.com/earn/earn_dash_banner.png" style={{ width: "100%" }}/>
            </div>
        )

        return  currentUser ? loggedIn() : loggedOut();
        
    }

}


export default SplashOut
