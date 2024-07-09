import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions";

const initialState = {
  content: [], // iniziamo con un array vuoto perché content riceverà un array dal nostro reducer
};

const addRemoveFavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        // content: state.cart.content.slice(0, action.payload).concat(state.cart.content.slice(action.payload + 1))
        //   content: [...state.cart.content.slice(0, action.payload), ...state.cart.content.slice(action.payload + 1)]
        content: state.content.filter((_, i) => i !== action.payload),
        // ❌ da non usare assolutamente metodi che mutano: es. splice!
      };

    default:
      return state;
  }
};

export default addRemoveFavoriteReducer;
