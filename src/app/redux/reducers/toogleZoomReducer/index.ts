import actionTypes from "../../actions/actionTypes";

export const toggleZoomReducer = (state=false,action:any) => {
    switch (action) {
        case actionTypes.TOGGLE_ZOOM:
            return state;
        default:
            return state;
    }
}