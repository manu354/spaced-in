import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    auth,
    db,
    facebookAuthProvider,
    githubAuthProvider,
    googleAuthProvider,
    twitterAuthProvider
} from "../firebase/firebase";
import {
    SIGNIN_FACEBOOK_USER,
    SIGNIN_GITHUB_USER,
    SIGNIN_GOOGLE_USER,
    SIGNIN_TWITTER_USER,
    SIGNIN_USER,
    SIGNOUT_USER,
    SIGNUP_USER,
    GET_RECENT,

} from "constants/ActionTypes";
import {showAuthMessage, userSignInSuccess, userSignOutSuccess, userSignUpSuccess} from "actions/Auth";
import {
    userFacebookSignInSuccess,
    userGithubSignInSuccess,
    userGoogleSignInSuccess,
    userTwitterSignInSuccess,
    getRecentsSucc,
} from "../actions/Auth";
import {NotificationManager} from "react-notifications";

const createUserWithEmailPasswordRequest = async (email, password) =>
    await (async () => {

        const rawResponse = await fetch('/authenticate', {
            method: 'POST',
            redirect: "follow",
            credentials: "same-origin",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login: email, password: password})
        });
        console.log(rawResponse);

        const content = await rawResponse.json();
        if (content.includes('/')) {
            localStorage.setItem('possible_user_id', email);
            localStorage.setItem('possible_user_name', email);
            window.location.replace(content);
        } else {
            NotificationManager.error("Could not sign into Google Keep:" + content);
        }
        console.log("yuh", content);
    })()
        .then(authUser => authUser)
        .catch(error => error);

const signInUserWithEmailPasswordRequest = async (email, password) =>
    await (async () => {

        const rawResponse = await fetch('/authenticate', {
            method: 'POST',
            redirect: "follow",
            credentials: "same-origin",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login: email, password: password})
        });
        alert(rawResponse);

        const content = await rawResponse.json();
        if (content.includes('/')) {
            localStorage.setItem('possible_user_id', email);
            localStorage.setItem('possible_user_name', email);
            window.location.replace(content);
        } else {
            NotificationManager.error("Could not sign into Google Keep:" + content);
        }
        console.log("yuh", content);
    })()
        .then(authUser => authUser)
        .catch(error => error);

const signOutRequest = async () =>
    await auth.signOut()
        .then(authUser => authUser)
        .catch(error => error);


const signInUserWithGoogleRequest = async () =>
    await auth.signInWithPopup(googleAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

const signInUserWithFacebookRequest = async () =>
    await auth.signInWithPopup(facebookAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

const signInUserWithGithubRequest = async () =>
    await auth.signInWithPopup(githubAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

const signInUserWithTwitterRequest = async () =>
    await auth.signInWithPopup(twitterAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

const getRecent = async () =>
    await db.collection("users").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                return doc.data();
            });
        })
        .catch(error => error);

function* fetchRecentRequest() {
    try {
        const fetchedRecents = yield call(getRecent);
        yield put(getRecentsSucc(fetchedRecents));
    } catch (error) {
        console.log(error)
    }
}

export function* fetchRecent() {
    yield takeEvery(GET_RECENT, fetchRecentRequest);
}

function* createUserWithEmailPassword({payload}) {
    const {email, password} = payload;
    try {
        const signUpUser = yield call(createUserWithEmailPasswordRequest, email, password);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            (async () => {

                const rawResponse = await fetch('/authenticate', {
                    method: 'POST',
                    redirect: "follow",
                    credentials: "same-origin",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({login: email, password: password})
                });
                console.log(rawResponse);

                const content = await rawResponse.json();
                if (content.includes('/')) {
                    localStorage.setItem('user_id', signUpUser.user.uid);
                    window.location.replace(content);
                } else {
                    NotificationManager.error("Could not sign into Google Keep:" + content);
                }
                console.log("yuh", content);
            })();
            yield put(userSignUpSuccess(signUpUser.user.uid));

        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* signInUserWithGoogle() {
    try {
        const signUpUser = yield call(signInUserWithGoogleRequest);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.user.uid);
            localStorage.setItem('user_name', signUpUser.user.displayName);
            yield put(userGoogleSignInSuccess(signUpUser.user.uid));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}


function* signInUserWithFacebook() {
    try {
        const signUpUser = yield call(signInUserWithFacebookRequest);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.user.uid);
            yield put(userFacebookSignInSuccess(signUpUser.user.uid));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}


function* signInUserWithGithub() {
    try {
        const signUpUser = yield call(signInUserWithGithubRequest);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.user.uid);
            yield put(userGithubSignInSuccess(signUpUser.user.uid));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}


function* signInUserWithTwitter() {
    try {
        const signUpUser = yield call(signInUserWithTwitterRequest);
        if (signUpUser.message) {
            if (signUpUser.message.length > 100) {
                yield put(showAuthMessage('Your request has been canceled.'));
            } else {
                yield put(showAuthMessage(signUpUser.message));
            }
        } else {
            localStorage.setItem('user_id', signUpUser.user.uid);
            yield put(userTwitterSignInSuccess(signUpUser.user.uid));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* signInUserWithEmailPassword({payload}) {
    const {email, password} = payload;
    try {
        const signInUser = yield call(signInUserWithEmailPasswordRequest, email, password);
        if (signInUser.message) {
            yield put(showAuthMessage(signInUser.message));
        } else {
            localStorage.setItem('user_id', signInUser.user.uid);
            yield put(userSignInSuccess(signInUser.user.uid));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* signOut() {
    try {
        const signOutUser = yield call(signOutRequest);
        if (signOutUser === undefined) {
            localStorage.removeItem('user_id');
            (async () => {
                const rawResponse = await fetch('/authenticate', {
                    method: 'POST',
                    redirect: "follow",
                    credentials: "same-origin",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({uname: localStorage.getItem('user_name')})
                });
            })();
            localStorage.removeItem('user_name');

            yield put(userSignOutSuccess(signOutUser));
        } else {
            yield put(showAuthMessage(signOutUser.message));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

export function* createUserAccount() {
    yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}

export function* signInWithGoogle() {
    yield takeEvery(SIGNIN_GOOGLE_USER, signInUserWithGoogle);
}

export function* signInWithFacebook() {
    yield takeEvery(SIGNIN_FACEBOOK_USER, signInUserWithFacebook);
}

export function* signInWithTwitter() {
    yield takeEvery(SIGNIN_TWITTER_USER, signInUserWithTwitter);
}

export function* signInWithGithub() {
    yield takeEvery(SIGNIN_GITHUB_USER, signInUserWithGithub);
}

export function* signInUser() {
    yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* signOutUser() {
    yield takeEvery(SIGNOUT_USER, signOut);
}

export default function* rootSaga() {
    yield all([fork(signInUser),
        fork(createUserAccount),
        fork(signInWithGoogle),
        fork(signInWithFacebook),
        fork(signInWithTwitter),
        fork(signInWithGithub),
        fork(signOutUser), fork(fetchRecent)]);
}