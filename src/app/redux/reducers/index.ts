import { combineReducers } from "redux";
import { toggleZoomReducer } from "./toogleZoomReducer";

const reducers = combineReducers({
    toogleZoom: toggleZoomReducer
});

export default reducers;