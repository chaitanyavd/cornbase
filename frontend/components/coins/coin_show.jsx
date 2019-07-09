import React from 'react'; 
// import coin_index_container from './coin_index_container';
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class CoinShow extends React.Component {

    componentDidMount() {
        this.props.fetchCoin(this.props.match.params.symbol)
        this.props.fetchYear(this.props.match.params.symbol)
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.symbol !== prevProps.match.params.symbol) {
            const symbol = this.props.match.params.symbol;
            this.props.fetchCoin(symbol);
            this.props.fetchYear(symbol); 
        }

    }


    // const parser = (this.props.data) => {
    //     debugger
    //     let coordinates = []; 

    //     action.forEach((day) => (
    //         let convertedTime; 

    //         function timeConverter(day.time) {
    //             let a = new Date(day.time * 1000);
    //             let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //             let year = a.getFullYear();
    //             let month = months[a.getMonth()];
    //             let date = a.getDate();
    //             let hour = a.getHours();
    //             let min = a.getMinutes();
    //             let sec = a.getSeconds();
    //             let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    //             convertedTime = time; 
    //         }


    //         coordinates.push([convertedTime, day.close])


    //     ))

    //         return coordinates
    // }



    render () { 


        const coin = this.props.coin ? this.props.coin : []
        // debugger 
        console.log(coin) 




        return (
            <div>
                <div className = "test">
                    <img src={`${coin.logo_url}`} width="80" height="80" />
                    {coin.name}
                </div>
                <LineChart className='chart'
                    width={676}
                    height={196}
                    data= {this.props.data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis dataKey="time" hide={true} />
                    <YAxis dataKey="close" hide={true}  />
                    <Tooltip />
                    <Line type="monotone" dataKey="close" dot={false} stroke='#21ce99' yAxisId={0} />
                     {/* <CartesianGrid stroke="#f5f5f5" /> }
                     <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} /> 
                     <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />  */}
                </LineChart>




            </div>
        )
    }

}

export default CoinShow


