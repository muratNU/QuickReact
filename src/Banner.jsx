
import { signInWithGoogle, signOut, useAuthState } from './utilities/firebase';

const SignInButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signInWithGoogle} >Sign in</button>
);

const SignOutButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signOut} >Sign out</button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

const activation = ({isActive}) => isActive ? 'active' : 'inactive';

const Banner = ({title}) => {
    return (
    <div>
        <h1>{title}</h1>
        <AuthButton />
    </div>);
}

export default Banner;