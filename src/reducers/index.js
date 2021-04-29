import {combineReducers} from 'redux';

import movie from './movie';
import query from './query';

const rootReducer = combineReducers({
  movie,
  query
});

export default rootReducer;
