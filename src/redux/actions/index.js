import { useDispatch } from "react-redux";

export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const SEARCHED_JOBS = "SEARCHED_JOBS";

export const addToFavoriteAction = data => ({ type: ADD_TO_FAVORITE, payload: data });
export const removeFromFavoriteAction = index => ({ type: REMOVE_FROM_FAVORITE, payload: index });

export const getJobsAction = query => {
  // la funzione RITORNATA dal nostro action creator è quella che possiamo rendere async,
  // thunk ci permetterà di eseguire le nostre logiche e di azionare la dispatch in un secondo momento
  return async (dispatch, getState) => {
    // come primo parametro ci viene regalata la funzione dispatch, SEMPRE necessaria per l'invio di un'action al reducer
    // per essere sincronizzati col momento effettivo in cui siamo pronti ad inviarla, dopo l'arrivo dei dati da una fetch che è asincrona
    console.log("GET STATE", getState()); // ritorna l'intero oggetto di stato globale

    //   dispatch({ type: GET_JOBS_LOADING_ON });
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        let fetchedJobs = await response.json();
        // a questo punto avremo aspettato la risoluzione della fetch e ottenuto i dati dei libri
        // e quindi potremmo fare la dispatch di un'azione con fetchedBooks come payload!

        // questa dispatch interna comunica a quella esterna che è il momento di riprendere il flusso redux e di far arrivare l'action al reducer
        dispatch({ type: SEARCHED_JOBS, payload: fetchedJobs.data });
        // dispatch({ type: GET_BOOKS_ERROR_OFF });
      } else {
        throw new Error("Errore nel erperimento dei dati 😥");
      }
    } catch (error) {
      console.log(error);
      //   dispatch({ type: GET_BOOKS_ERROR_ON, payload: error.message });
    } finally {
      //   dispatch({ type: GET_BOOKS_LOADING_OFF });
    }
  };
};
