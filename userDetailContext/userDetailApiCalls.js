import axios from "axios";

export const userDetailCall = (userId, dispatch) => {
  dispatch({ type: "GET_USER_DETAIL_START" });
  axios
    .post("/userDetails/getByUserID", { userID: userId })
    .then((res) => {
      dispatch({ type: "GET_USER_DETAIL_SUCCESS", payload: res.data[0] });
    })
    .catch((err) => {
      dispatch({ type: "GET_USER_DETAIL_FAILURE" });
    });
};

// export const userDetailCall = async (userId, dispatch) => {
//   dispatch({ type: "LOGIN_START" });
//   try {
//     const res = await axios.post("/auth/login", userCredentials);
//     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//   } catch (error) {
//     dispatch({ type: "LOGIN_FAILURE" });
//   }
// };
