import * as actions from '../../actions/actionTypes';

export const initialState = {
  filter: '',
  limit: 12,
  sortBy: 'release_date',
  sortOrder: 'desc',
  search: ''
};

const query = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ACTIVE_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    case actions.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      };
    case actions.SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload
      };
    case actions.SET_LIMIT:
      return {
        ...state,
        limit: action.payload
      };
    case actions.SET_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};

export default query;
