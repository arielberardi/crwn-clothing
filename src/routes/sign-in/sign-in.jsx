import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../services/firebase/firebase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign with Google
      </button>
    </div>
  );
};

export default SignIn;