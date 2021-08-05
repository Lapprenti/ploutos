import IUser from "../interfaces/IUser";
import firebase from "firebase"
import "firebase/auth"


function handleFirebasePayloadToIUser(payload: firebase.auth.UserCredential): IUser {
  const user: IUser = {
    authMethods: [payload.user?.providerId as string],
    email: payload.user?.email as string,
    username: payload.user?.displayName as string,
    id: payload.user?.uid,
    newUser: payload.additionalUserInfo?.isNewUser
  }
  return user;
}

function handleFirebaseUserTypePayloadToIUser(payload: firebase.User): IUser {
  const user: IUser = {
    authMethods: [payload.providerId as string],
    email: payload.email as string,
    username: payload.displayName as string,
    id: payload.uid,
    newUser: false
  }
  return user;
}

export { handleFirebasePayloadToIUser, handleFirebaseUserTypePayloadToIUser }