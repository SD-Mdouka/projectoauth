export default (state, action) => {
  switch (action.type) {
    case "REMOVEUser":
      return {
        users: state.users.filter((user) => {
          return user.id !== action.data;
        }),
      };
    case "ADDUser":
      return {
        users: [action.data, ...state.users],
      };
    case "EDITUser":
      const updateUser = action.data;

      const updateUsers = state.users.map((user) => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      });

      return {
        users: updateUsers,
      };
    default:
      return state;
  }
};
