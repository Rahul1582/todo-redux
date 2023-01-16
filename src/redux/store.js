import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer } from "./reducer.js";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import immutableTransform from "redux-persist-transform-immutable";

const persistConfig = {
  transforms: [immutableTransform()],
  key: "root",
  storage
};

const reducers = combineReducers({
  reducer: reducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import { reducer } from "./reducer.js";

// const store = configureStore({
//   reducer: reducer
// });

// export default store;
