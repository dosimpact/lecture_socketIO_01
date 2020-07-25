// ============ users ============
// addUser , error
// removeUser
// getRoominUsers
// getUser

let users = [];

const addUser = ({ id, name, room }) => {
  const name = name.trim().toLowerCase();
  const room = room.trim().toLowerCase();
  if (!name || !room) return { error: "need name or room " };
  const existUser = users.find((user) => user.name === name);
  if (existUser) return { error: "name is already taken" };

  const user = { name, room, id };
  users.push(user);
  return { user };
};
const getUser = (id) => {
  const user = users.find((user) => user.id === id);
  if (!user) return { error: "can't find user by id" };
  return { user };
};
const removeUser = (id) => {
  const idx = users.findIndex((user) => user.id === id);
  if (idx === -1) return { error: "can't remove user by id" };
  return { user: users.splice(idx, 1)[0] };
};
const getRoominUsers = (room) => {
  return { users: users.filter((user) => user.room === room) };
};
