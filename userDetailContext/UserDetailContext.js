import { createContext, useReducer, useEffect, useState } from "react";
import UserDetailReducer from "./UserDetailReducer";

const INITIAL_STATE = {
  userDetail: {},
  isFetching: false,
  error: false,
};

//context
export const UserDetailContext = createContext(INITIAL_STATE);

//contextProvider
export const UserDetailContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserDetailReducer, INITIAL_STATE);

  //saving user in local storage
  // const [didMount, setDidMount] = useState(false);
  // useEffect(() => {
  //   setDidMount(true);
  //   localStorage.setItem("user", JSON.stringify(state.user));
  //   return () => setDidMount(false);
  // }, [state.user]);
  // if (!didMount) {
  //   return null;
  // }

  return (
    <UserDetailContext.Provider
      value={{
        userDetail: state.userDetail,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserDetailContext.Provider>
  );
};
