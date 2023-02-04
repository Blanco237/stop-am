import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth';


import app from './config';

export const auth = getAuth(app);

//Google provider
const provider = new GoogleAuthProvider();

//Google Login
export const loginWithGoogle = async (size) => {
    let response = {};
    let user;
    try {
        //Desktop Screen, Sign in with Popup
        const userCredential = await signInWithPopup(auth, provider);
        user = userCredential.user;
        response.success = true;
        response.user = user;
    }
    catch (e) {
        response.success = false;
        response.ecode = e.code;
        response.emessage = e.message;
    }
    return response;
}


//Sign out user
export const logout = async () => {
    await signOut(auth);
}
