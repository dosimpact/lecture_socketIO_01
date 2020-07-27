import {
  ADD_USER,
  REMOVE_USER,
  GET_USER_IN_ROOM,
  GET_USER,
  ERROR_USER,
} from "../_actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, { ...action.payload }];
    case REMOVE_USER:
      const filteredUsers = state.filter(
        (user) => user.id !== action.payload.id
      );
      return [...filteredUsers];
    case ERROR_USER:
      return [...state];
    default:
      return state;
  }
};
