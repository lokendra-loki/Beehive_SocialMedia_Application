const UserDetailReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_DETAIL_START":
      return {
        userDetail: null,
        isFetching: true,
        error: false,
      };

    case "GET_USER_DETAIL_SUCCESS":
      return {
        userDetail: action.payload,
        isFetching: false,
        error: false,
      };

    case "GET_USER_DETAIL_FAILURE":
      return {
        userDetail: null,
        isFetching: false,
        error: true,
      };

    default:
      return state;
  }
};

export default UserDetailReducer;
