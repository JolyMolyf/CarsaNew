import {applyMiddleware, createStore} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ['user'] // or blacklist to exclude specific reducers
 };


const presistedReducer = persistReducer(persistConfig, rootReducer );
export function configureStore() {
    let store = createStore(presistedReducer, composeWithDevTools(
        applyMiddleware(thunk)
    ))

    return store;
}



export type storeState = ReturnType<typeof store.getState>

export const getState = () => {
    return store.getState()
}

export const store = configureStore()
export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector