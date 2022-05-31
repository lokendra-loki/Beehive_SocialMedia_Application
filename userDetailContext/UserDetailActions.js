//Get
export const GetUserDetailStart = () => ({
  type: "GET_USER_DETAIL_START",
});

export const GetUserDetailSuccess = (userDetail) => ({
  type: "GET_USER_DETAIL_SUCCESS",
  payload: userDetail,
});

export const GetUserDetailFailure = () => ({
  type: "GET_USER_DETAIL_FAILURE",
});
