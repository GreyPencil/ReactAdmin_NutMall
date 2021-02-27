import {createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

//export default store


export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk) )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)