import { RECEIVE_METADATA } from "../actions/coin_actions";
import merge from "lodash/merge";

const coinMetadataReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_METADATA:
      return action.metadatum.data;
      // debugger
      //  action.metadatum.data.forEach(data => (newState[data.id] = data));
      // return newState; 
    default:
      return state;
  }
};

export default coinMetadataReducer; ;
