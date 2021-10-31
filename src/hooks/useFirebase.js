import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, } from "firebase/auth";
import firebaseInitializeAuthentication from "../Firebase/firebase.init";



firebaseInitializeAuthentication()


const useFirebase = () => {
    const auth = getAuth()
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    // const [isLoading, setIsLoading] = useState(true)

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)


    }
    console.log(user)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            // setIsLoading(false)

        })
        return () => unsubscribe
    }, [])



    const logOut = () => {
        // setIsLoading(true)
        signOut(auth)
            .then(() => {

            })
        // .finally(() => setIsLoading(false))
    }
    return {
        user,

        signInUsingGoogle,
        logOut,


    }

}
export default useFirebase