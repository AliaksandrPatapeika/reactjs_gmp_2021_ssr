import * as actionTypes from '../../actions/actionTypes';
import reducer, {initialState} from './query';

describe('query reducer', () => {
  test('SET_ACTIVE_FILTER', () => {
    const mockFilter = 'comedy';
    const action = {
      type: actionTypes.SET_ACTIVE_FILTER,
      payload: mockFilter
    };
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      filter: mockFilter
    });
  });

  test('SET_SORT_BY', () => {
    const mockSortBy = 'release_date';
    const action = {
      type: actionTypes.SET_SORT_BY,
      payload: mockSortBy
    };
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      sortBy: mockSortBy
    });
  });

  test('SET_SORT_ORDER', () => {
    const mockSortOrder = 'asc';
    const action = {
      type: actionTypes.SET_SORT_ORDER,
      payload: mockSortOrder
    };
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      sortOrder: mockSortOrder
    });
  });

  test('SET_LIMIT', () => {
    const mockLimit = 6;
    const action = {
      type: actionTypes.SET_LIMIT,
      payload: mockLimit
    };
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      limit: mockLimit
    });
  });

  test('SET_SEARCH', () => {
    const mockSearch = 'The Movie';
    const action = {
      type: actionTypes.SET_SEARCH,
      payload: mockSearch
    };
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      search: mockSearch
    });
  });
});
