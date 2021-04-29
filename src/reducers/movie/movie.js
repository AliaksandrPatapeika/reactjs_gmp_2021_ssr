import * as actions from '../../actions/actionTypes';

export const initialState = {
  activeModalMovie: null,
  activeModalWindow: false,
  activeMovieDetailsMovie: null,
  errorMessage: '',
  isLoading: false,
  movies: [],
  totalAmount: null
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case actions.CATCH_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    case actions.CLOSE_MODAL:
      return {
        ...state,
        activeModalWindow: false,
        activeModalMovie: null
      };
    case actions.CLOSE_MOVIE_DETAILS:
      return {
        ...state,
        activeMovieDetailsMovie: null
      };
    case actions.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.data,
        totalAmount: action.payload.totalAmount
      };
    case actions.GET_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        activeMovieDetailsMovie: action.payload
      };
    case actions.SHOW_MODAL:
      return {
        ...state,
        activeModalWindow: action.payload.activeModalWindow,
        activeModalMovie: action.payload.activeModalMovie
      };
    case actions.SHOW_MOVIE_DETAILS:
      return {
        ...state,
        activeMovieDetailsMovie: action.payload
      };
    case actions.START_ASYNC_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};

export default movie;
