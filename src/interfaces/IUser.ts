export default interface IUser {
  id?: string,
  username?: string;
  email: string;
  authMethods : ArrayLike<string>;
  newUser?: boolean
}