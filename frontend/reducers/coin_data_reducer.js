import { RECEIVE_YEAR_DATA } from '../actions/coin_actions';
import merge from "lodash/merge"




const coinDataReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_YEAR_DATA:
            return action.data
            // return merge({}, state, action.data )

        default:

            return state;
    }
};

export default coinDataReducer;


// *PARSER FUNCTION 


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
