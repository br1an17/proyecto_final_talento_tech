const user = [];
import crypto from 'crypto';

const getAllUsers = () => {
  return user;
};

const createUser = (newUser) => {
  const newUser = {
    id: crypto.randomUUID(),
    name: newUser.name,
    email: newUser.email,
  };
  user.push(newUser);
  return newUser;
};
export default {
  getAllUsers,
  createUser,
};
