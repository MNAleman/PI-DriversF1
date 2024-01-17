import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);





// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducer/reducer";
// import thunkMiddleware from "redux-thunk";

// const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar don la extension

// export const store = createStore(
//     rootReducer,
//     composeEnhacer(applyMiddleware(thunkMiddleware)));