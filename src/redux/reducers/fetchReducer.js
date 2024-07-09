import { GET_JOBS_ERROR_OFF, GET_JOBS_ERROR_ON, GET_JOBS_LOADING_OFF, GET_JOBS_LOADING_ON, SEARCHED_JOBS } from "../actions";

const initialState = {
  jobs: [],
  isLoading: false,
  hasError: false,
  errorMessage: "",
};

const searchedJobs = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHED_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case GET_JOBS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };

    case GET_JOBS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };

    case GET_JOBS_ERROR_ON:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };

    case GET_JOBS_ERROR_OFF:
      return {
        ...state,
        hasError: false,
        errorMessage: "",
      };

    default:
      return state;
  }
};

export default searchedJobs;
