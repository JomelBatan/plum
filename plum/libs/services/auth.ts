import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import { auth } from "../firebase";
import { AuthSessionResult } from "expo-auth-session";

export async function register(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password);
}

export async function login(email: string, password: string) {
  await signInWithEmailAndPassword(auth, email, password);
}

export async function logout() {
  await signOut(auth);
}

// Google Sign-in using Expo AuthSession
export async function signInWithGoogle(result: AuthSessionResult | null) {
  if (!result || result.type !== "success" || !result.authentication?.idToken)
    return;

  const credential = GoogleAuthProvider.credential(
    result.authentication.idToken
  );
  await signInWithCredential(auth, credential);
}
