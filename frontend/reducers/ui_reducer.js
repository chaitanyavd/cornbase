import { combineReducers } from 'redux';
import modal from './modal_reducer';
import grid from './grid_reducer'; 

export default combineReducers({
    modal, grid
});
