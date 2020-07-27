// =========================
// make actions creators
// =========================

import { ADD_USER, REMOVE_USER, GET_USER_IN_ROOM, GET_USER } from "./types";
import store from "../store";

export const addUser = ({ id, room, name }) => {
  return {
    type: ADD_USER,
    payload: { id, room, name },
  };
};
export const removeUser = ({ id }) => {
  return {
    type: REMOVE_USER,
    payload: { id },
  };
};

export const getUser = ({ id }) => {
  const { users } = store.getState();
  return {
    type: GET_USER,
    payload: {
      user: users.filter((user) => user.id === id)[0],
    },
  };
};

export const getUserInRoom = ({ id, room }) => {
  const { users } = store.getState();
  return {
    type: GET_USER_IN_ROOM,
    payload: {
      users: users.filter((user) => user.room === room),
    },
  };
};
