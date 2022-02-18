import { combineReducers } from "redux";
import { toggleZoomReducer } from "./toogleZoomReducer";

console.log('reducer', toggleZoomReducer);

const reducers = combineReducers({
    toggleZoom: toggleZoomReducer
});

export default reducers;
