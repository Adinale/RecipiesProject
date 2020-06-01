import { createStore } from 'redux';
import recipiesReducer from '../reducers/recipies';

const store = createStore(recipiesReducer);

export default store;