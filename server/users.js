const users = [];

const addUser = ({id, name, room}) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existedUser = users.find(u => u.name === name && u.room === room);

  if (existedUser)
    return {error: 'This name is taken'};

  const user = {id, name, room};

  users.push(user);
  return { user }
}

const removeUser = (id) => {
  const index = users.find(u => u.id === id);
  if (index)
    users.splice(index, 1);
}

const getUser = (id) => users.find(u => u.id === id);

const getUsersInRoom = (room) => users.find(u => u.room === room);

module.exports = {addUser, removeUser, getUser, getUsersInRoom};