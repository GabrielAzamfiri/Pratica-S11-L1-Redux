import { SEARCHED_JOBS } from "../actions";

const initialState = {
  jobs: [],
};

const searchedJobs = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHED_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    default:
      return state;
  }
};

export default searchedJobs;
