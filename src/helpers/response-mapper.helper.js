const removeFields = (user) => {
  const userCopy = structuredClone(user);
  delete userCopy.Profile;
  delete userCopy.ProfileId;
  return userCopy;
};

const userMapper = (user) => {
  const normalizedUser = user.toJSON();
  return removeFields({ ...normalizedUser.Profile, ...normalizedUser });
};

const responseMapper = (users) =>
  Array.isArray(users) ? users.map(userMapper) : userMapper(users);

export { removeFields, responseMapper };
