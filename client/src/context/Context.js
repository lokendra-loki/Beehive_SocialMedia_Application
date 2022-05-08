// import { createContext, useReducer, useEffect, useState } from "react";
// import Reducer from "./Reducer";


// //======================>
// import {
//     signInWithPopup,
//     GoogleAuthProvider,
//     GithubAuthProvider,
// } from "firebase/auth"
// import { auth } from "../config/firebase";
// //======================>





// const INITIAL_STATE = {
//     user: JSON.parse(localStorage.getItem("user")) || null,  //fetching user from local storage
//     isFetching: false,
//     error: false,
// };


// //context
// export const Context = createContext(INITIAL_STATE);

// //contextProvider
// export const ContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);







//     //sign in with google===============>
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState("")
//     const [user, setUser] = useState(null)

//     const signInWithGoogle = () => {
//         setLoading(true)
//         signInWithPopup(auth, new GoogleAuthProvider())
//             .then((res) => console.log(res))
//             .catch((err) => setError(err.code))
//             .finally(() => setLoading(false))
//     }



//     const signInWithGithub = () => {
//         setLoading(true)
//         signInWithPopup(auth, new GithubAuthProvider())
//             .then((res) => console.log(res))
//             .catch((err) => setError(err.code))
//             .finally(() => setLoading(false))
//     }










//     //saving user in local storage
//     useEffect(() => {
//         localStorage.setItem("user", JSON.stringify(state.user));
//     }, [state.user]) //whenever user changes save that user in local storage




//     return (
//         <Context.Provider value={{
//             user: state.user, isFetching: state.isFetching, error: state.error, dispatch
//             , signInWithGoogle, signInWithGithub, loading, setLoading, setError, setUser
//         }}>
//             {children}
//         </Context.Provider>
//     )
// }




//================================================================================================
import { createContext, useReducer, useEffect, useState } from "react";
import Reducer from "./Reducer";


//======================>
import {
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
} from "firebase/auth"
import { auth } from "../config/firebase";
//======================>





const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,  //fetching user from local storage
    isFetching: false,
    error: false,
};


//context
export const Context = createContext(INITIAL_STATE);

//contextProvider
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);







    //sign in with google===============>
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [user, setUser] = useState(null)

    const signInWithGoogle = () => {
        setLoading(true)
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((res) => console.log(res))
            .catch((err) => setError(err.code))
            .finally(() => setLoading(false))
    }



    const signInWithGithub = () => {
        setLoading(true)
        signInWithPopup(auth, new GithubAuthProvider())
            .then((res) => console.log(res))
            .catch((err) => setError(err.code))
            .finally(() => setLoading(false))
    }










    //saving user in local storage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]) //whenever user changes save that user in local storage




    return (
        <Context.Provider value={{
            user: state.user, isFetching: state.isFetching, error: state.error, dispatch
            , signInWithGoogle, signInWithGithub, loading, setLoading, setError, setUser
        }}>
            {children}
        </Context.Provider>
    )
}




