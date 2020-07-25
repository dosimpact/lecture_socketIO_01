let users = [];

const addUser = (id, name, room) => {
  if (!name || !room) return { user: null, error: "need name or room" };
  const idx = users.findIndex((u) => u.name === name);
  if (idx !== -1) return { user: null, error: "name is already taken" };

  const user = { id, name, room };
  users.push(user);
  return { user, error: null };
};
const removeUser = (id) => {
  const idx = users.findIndex((u) => u.id === id);
  if (idx !== -1) return { user: null, error: "user can't find" };

  return { user: users.splice(idx, 1)[0], error: null };
};
const getUser = (id) => {
  return { user: users.find((u) => u.id === id) };
};
const getUsersInRoom = (room) => {
  return { users: users.filter((u) => u.room === room), error: null };
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
