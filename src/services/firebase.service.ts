import firebase from 'firebase';
import 'firebase/auth';
import { ICategory } from '../interfaces/ICategory';
import { IExpense } from '../interfaces/IExpense';
import { IPersonnalization } from '../interfaces/IPersonnalization';

//#region Authentication

function loginEmailPwd(email: string, pwd: string) {
  return new Promise<firebase.auth.UserCredential>((resolve, reject) => {
    console.log(email, pwd);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pwd)
      .then((output) => {
        resolve(output);
      })
      .catch((reason) => {
        console.warn(reason);
        reject(false);
      });
  });
}

/**
 * Function to log onto the app with google
 * @returns "firebase.auth.UserCredential" object if login successful, false if any error happen
 */
function loginWithGoogle() {
  const google = new firebase.auth.GoogleAuthProvider();
  return new Promise<firebase.auth.UserCredential>((resolve, reject) => {
    firebase
      .auth()
      .signInWithPopup(google)
      .then((output) => {
        resolve(output);
      })
      .catch((reason) => {
        console.warn(reason);
        reject(false);
      });
  });
}

/**
 * Fonction that logs out the user
 * @returns True if the user is successfully displogged from the app, false otherwise
 */
function logout() {
  return new Promise<boolean>((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then((output) => {
        console.log('the user was dislogged');
        console.log(output);
        resolve(true);
      })
      .catch((reason) => {
        console.warn(reason);
        reject(false);
      });
  });
}

//#endregion Authentication

//#region User configuration
//#region Personnalization
function getUserPersonnalization(idUser: string) {}

function setUserPersonnalization(idUser: string, personnalisation: IPersonnalization) {}
//#endregion Personnalization
//#region Categories
function getUserDefinedCategories(idUser: string) {}

function setUserDefinedCategories(idUser: string, categories: Array<ICategory>) {}
//#endregion Categories
//#endregion User configuration

//#region Expenses
function getUserExpenses(idUser: string) {}
function addExpense(idUser: string, expense: IExpense) {}
//#endregion Expenses

//#region exports
export {
  loginEmailPwd,
  loginWithGoogle,
  logout,
  getUserDefinedCategories,
  getUserPersonnalization,
  getUserExpenses,
  setUserDefinedCategories,
  setUserPersonnalization,
  addExpense,
};
//#endregion exports
