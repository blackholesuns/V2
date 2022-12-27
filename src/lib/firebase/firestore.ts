const FIREBASE_API = "AIzaSyAigwWBOER7GLMrSUXTGlSy2dTFtvdNJVY"
const FIREBASE_MSGID = "957357186275"
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, collection, doc } from "firebase/firestore";
import { Config } from "./config";

export const App = initializeApp(Config);
export const Firestore = getFirestore(App);

export async function GetEntry(type: string, id: string, galaxy = "Euclid") {
    if(galaxy === galaxy.toLowerCase())
    {
        galaxy = galaxy[0].toUpperCase() + galaxy.slice(1);
    }
    const res = await getDoc(doc(Firestore, `nmsce/${galaxy}/${type}/${id}`));
    return {exists: res.exists(), data: res.data()}
}
