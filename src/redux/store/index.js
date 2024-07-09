// questo file si occuperà di creare il nostro Redux Store all'avvio dell'applicazione

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import addRemoveFavoriteReducer from "../reducers/addRemoveFavoriteReducer";
import fetchReducer from "../reducers/fetchReducer";

// questa funzione si occuperà di creare lo Store grazie ad una funzione esportata dal pacchetto @reduxjs/toolkit,
// la funzione ci chiede delle opzioni (tra cui il nostro reducer) e restituirà un oggetto di stato che avermo poi all'interno della variabile store.
const rootReducer = combineReducers({
  addRemoveFavorite: addRemoveFavoriteReducer,
  searchedJobs: fetchReducer,
});

// questa funzione si occuperà di creare lo Store grazie ad una funzione esportata dal pacchetto @reduxjs/toolkit,
// la funzione ci chiede delle opzioni (tra cui il nostro reducer) e restituirà un oggetto di stato che avermo poi all'interno della variabile store.
const store = configureStore({
  reducer: rootReducer,
});

export default store;
