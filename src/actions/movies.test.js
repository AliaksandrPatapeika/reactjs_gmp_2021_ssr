import {head} from 'lodash';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MockMovies from '../tests/mocks/mockData';
import * as actionTypes from './actionTypes';
import * as actions from './movies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('movies actions', () => {
  const mockMovie = head(MockMovies);
  const mockErrorMessage = 'error message';
  const mockInitialState = {
    query: {
      filter: '',
      limit: 12,
      sortBy: 'release_date',
      sortOrder: 'desc',
      search: ''
    }
  };
  const mockErrorResponse = {
    status: 400,
    message: mockErrorMessage
  };
  const mockSuccessResponse = {
    status: 200,
    response: MockMovies
  };

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('catchError', () => {
    const expectedAction = {
      type: actionTypes.CATCH_ERROR,
      payload: mockErrorMessage
    };

    expect(actions.catchError(mockErrorMessage)).toEqual(expectedAction);
  });

  test('closeModal', () => {
    const expectedAction = {
      type: actionTypes.CLOSE_MODAL
    };

    expect(actions.closeModal()).toEqual(expectedAction);
  });

  test('closeMovieDetails', () => {
    const expectedAction = {
      type: actionTypes.CLOSE_MOVIE_DETAILS
    };

    expect(actions.closeMovieDetails()).toEqual(expectedAction);
  });

  test('fetchMoviesSuccess', () => {
    const expectedAction = {
      type: actionTypes.FETCH_MOVIES_SUCCESS,
      payload: MockMovies
    };

    expect(actions.fetchMoviesSuccess(MockMovies)).toEqual(expectedAction);
  });

  test('getMovieByIdSuccess', () => {
    const expectedAction = {
      type: actionTypes.GET_MOVIE_BY_ID_SUCCESS,
      payload: mockMovie
    };

    expect(actions.getMovieByIdSuccess(mockMovie)).toEqual(expectedAction);
  });

  test('setFilter', () => {
    const mockFilter = 'comedy';
    const expectedAction = {
      type: actionTypes.SET_ACTIVE_FILTER,
      payload: mockFilter
    };

    expect(actions.setFilter(mockFilter)).toEqual(expectedAction);
  });

  test('setSortBy', () => {
    const mockSortBy = 'release_date';
    const expectedAction = {
      type: actionTypes.SET_SORT_BY,
      payload: mockSortBy
    };

    expect(actions.setSortBy(mockSortBy)).toEqual(expectedAction);
  });

  test('setSortOrder', () => {
    const mockSortOrder = 'asc';
    const expectedAction = {
      type: actionTypes.SET_SORT_ORDER,
      payload: mockSortOrder
    };

    expect(actions.setSortOrder(mockSortOrder)).toEqual(expectedAction);
  });

  test('setLimit', () => {
    const mockLimit = 6;
    const expectedAction = {
      type: actionTypes.SET_LIMIT,
      payload: mockLimit
    };

    expect(actions.setLimit(mockLimit)).toEqual(expectedAction);
  });

  test('setSearch', () => {
    const mockSearch = 'The Movie';
    const expectedAction = {
      type: actionTypes.SET_SEARCH,
      payload: mockSearch
    };

    expect(actions.setSearch(mockSearch)).toEqual(expectedAction);
  });

  test('showModal', () => {
    const mockActiveModalWindow = 'addMovie';
    const expectedAction = {
      type: actionTypes.SHOW_MODAL,
      payload: {
        activeModalWindow: mockActiveModalWindow,
        activeModalMovie: mockMovie
      }
    };

    expect(actions.showModal(mockActiveModalWindow, mockMovie)).toEqual(expectedAction);
  });

  test('showMovieDetails', () => {
    const expectedAction = {
      type: actionTypes.SHOW_MOVIE_DETAILS,
      payload: mockMovie
    };

    expect(actions.showMovieDetails(mockMovie)).toEqual(expectedAction);
  });

  test('startAsyncRequest', () => {
    const expectedAction = {
      type: actionTypes.START_ASYNC_REQUEST
    };

    expect(actions.startAsyncRequest()).toEqual(expectedAction);
  });

  test('fetchMovies', () => {
    const store = mockStore(mockInitialState);
    const expectedActions = [
      {type: actionTypes.START_ASYNC_REQUEST},
      {type: actionTypes.FETCH_MOVIES_SUCCESS, payload: MockMovies}
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith(mockSuccessResponse);
    });

    return store.dispatch(actions.fetchMovies())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('fetchMovies error', () => {
    const store = mockStore(mockInitialState);
    const expectedActions = [
      {type: actionTypes.START_ASYNC_REQUEST},
      {type: actionTypes.CATCH_ERROR, payload: mockErrorMessage}
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.reject(mockErrorResponse);
    });

    return store.dispatch(actions.fetchMovies())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('getMovieById', () => {
    const store = mockStore({});
    const expectedActions = [
      {type: actionTypes.GET_MOVIE_BY_ID_SUCCESS, payload: mockMovie}
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: mockMovie
      });
    });

    return store.dispatch(actions.getMovieById(mockMovie.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('getMovieById error', () => {
    const store = mockStore({});
    const expectedActions = [
      {type: actionTypes.CATCH_ERROR, payload: mockErrorMessage}
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.reject(mockErrorResponse);
    });

    return store.dispatch(actions.getMovieById(mockMovie.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('addMovie', () => {
    const store = mockStore({});
    const expectedActions = [
      {type: actionTypes.CLOSE_MODAL}
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith(mockSuccessResponse);
    });

    return store.dispatch(actions.addMovie(mockMovie)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('addMovie error', () => {
    const store = mockStore({});
    const expectedActions = [
      {type: actionTypes.CATCH_ERROR, payload: mockErrorMessage}
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.reject(mockErrorResponse);
    });

    return store.dispatch(actions.addMovie(mockMovie)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('editMovie', () => {
    const store = mockStore({});
    const expectedActions = [
      {type: actionTypes.CLOSE_MODAL}
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith(mockSuccessResponse);
    });

    return store.dispatch(actions.editMovie(mockMovie)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('editMovie error', () => {
    const store = mockStore({});
    const expectedActions = [
      {type: actionTypes.CATCH_ERROR, payload: mockErrorMessage}
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.reject(mockErrorResponse);
    });

    return store.dispatch(actions.editMovie(mockMovie)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('deleteMovie', () => {
    const store = mockStore({});
    const expectedActions = [
      {type: actionTypes.CLOSE_MODAL}
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith(mockSuccessResponse);
    });

    return store.dispatch(actions.deleteMovie(mockMovie.id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('deleteMovie error', () => {
    const store = mockStore({});
    const expectedActions = [
      {type: actionTypes.CATCH_ERROR, payload: mockErrorMessage}
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.reject(mockErrorResponse);
    });

    return store.dispatch(actions.deleteMovie(mockMovie.id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('setStateFromURL', () => {
    const mockParams = '?filter=comedy&limit=12&sortBy=release_date&sortOrder=desc&search=movie&searchBy=title';
    const mockURL = new URLSearchParams(mockParams);
    const store = mockStore({});
    const expectedActions = [
      {type: actionTypes.SET_SEARCH, payload: 'movie'},
      {type: actionTypes.SET_ACTIVE_FILTER, payload: 'comedy'},
      {type: actionTypes.SET_SORT_BY, payload: 'release_date'},
      {type: actionTypes.SET_SORT_ORDER, payload: 'desc'},
      {type: actionTypes.SET_LIMIT, payload: '12'}
    ];

    store.dispatch(actions.setStateFromURL(mockURL));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
