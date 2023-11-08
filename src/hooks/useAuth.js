import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export default function useAuth() {
  const {
    currentUser,
    loading,
    signIn,
    logOut,
    createNewUser,
    logInWithGoogle,
  } = useContext(AuthContext);
  return {
    currentUser,
    loading,
    signIn,
    logOut,
    createNewUser,
    logInWithGoogle,
  };
}
