import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, query, orderBy, limit, getDocs, collection } from "firebase/firestore";
import { Config } from "$lib/Firebase/Config";
import { CapitalizeFirstLetter } from "$lib/Util";

export const App = initializeApp(Config);
export const Firestore = getFirestore(App);

export async function GetEntry(id: string, type?: string, galaxy?: string) {

	galaxy = galaxy && CapitalizeFirstLetter(galaxy);
	type = type && CapitalizeFirstLetter(type);

    const res = await getDoc(doc(Firestore, `/nmsceCombined/${id}`));
    return {exists: res.exists(), data: res.data()}
}

export async function GetLatestEntries(maxCount: number = 50) {

    const res = await getDocs(query(collection(Firestore, "nmsceCombined"), orderBy("created", "desc"), limit(maxCount)));
    return {
		exists: !res.empty,
		data: res.docs.map(v => v.data())
	};
}
