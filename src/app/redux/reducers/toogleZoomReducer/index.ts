import actionTypes from "../../actions/actionTypes";

export const toggleZoomReducer = (state = false, action: any) => {
    switch (action.type) {
        case actionTypes.TOGGLE_ZOOM:
            return action.playload; 
        default:
            return state;
    }
}