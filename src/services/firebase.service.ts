import firebase from "firebase"
import "firebase/auth"

function loginWithGoogle() {
  const google = new firebase.auth.GoogleAuthProvider();
  return new Promise<boolean>((resolve, reject) => {
    firebase.auth().signInWithPopup(google)
    .then((output) => {
      console.log('the user is logged')
      console.log(output)
      resolve(true)
    })
    .catch((reason) => {
      console.warn(reason)
      reject(false)
    });
  })
}

function logout() {
  const google = new firebase.auth.GoogleAuthProvider();
  return new Promise<boolean>((resolve, reject) => {
    firebase.auth().signOut()
    .then((output) => {
      console.log('the user was dislogged')
      console.log(output)
      resolve(true)
    })
    .catch((reason) => {
      console.warn(reason)
      reject(false)
    });
  })
}

export { loginWithGoogle, logout }