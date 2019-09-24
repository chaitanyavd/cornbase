import {OPEN_GRID, CLOSE_GRID} from '../actions/grid-actions'; 


export default function gridReducer(state = null, action) {
    switch (action.type) {
        case OPEN_GRID:
            return true;
        case CLOSE_GRID:
            return false;
        default:
            return state;
    }
}
