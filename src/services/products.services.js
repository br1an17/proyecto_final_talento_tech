const users = ["zairolo"];
import crypto from 'crypto';

const getAllUsers = () => {
  return users;
};

const createUser = (user) => {
  const newUser = {
    id: crypto.randomUUID(),
    name: user.name,
    email: user.email,
  };
  users.push(newUser);
  return newUser;
};
export default {
  getAllUsers,
  createUser,
};
