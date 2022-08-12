export default (state, action) => {
  switch (action.type) {
    case 'REMOVEUser':
      return {
        users: state.users.filter((user) => {
          return user.id !== action.data;
        }),
      };
    case 'ADDUser':
      return {
        users: [action.data, state.users],
      };
    default:
      return state;
  }
};
