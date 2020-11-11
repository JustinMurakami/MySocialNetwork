import {combineReducers} from 'redux';

const INITIAL_State = {
  current: [],
  possible: [
    'Alice',
    'Bob',
    'Sammy',
  ],
}

const friendsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  friends: friendsReducer
});