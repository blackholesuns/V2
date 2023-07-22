import type { FirebaseOptions } from "firebase/app";
import { FirebaseAPI, FirebaseAuthDomain, FirebaseDatabaseUrl, FirebaseMessageId, FirebaseProjectId, FirebaseStorageBucket } from "../environment";

export const Config = {
    apiKey: FirebaseAPI,
    authDomain: FirebaseAuthDomain,
    databaseURL: FirebaseDatabaseUrl,
    projectId: FirebaseProjectId,
    storageBucket: FirebaseStorageBucket,
    messagingSenderId: FirebaseMessageId,
} as FirebaseOptions;