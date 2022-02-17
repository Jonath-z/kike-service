import actionTypes from "./actionTypes"

export const toggleZoom = (toogleState: boolean) => {
    console.log(toogleState);
    return (dispatch: any) => {
        dispatch({
            type: actionTypes.TOGGLE_ZOOM,
            playload: toogleState
        });
    }
}