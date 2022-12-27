import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, collection, doc, query, collectionGroup, orderBy, limit, getDocs } from "firebase/firestore";
import { Config } from "$lib/Firebase/Config";
import { CapitalizeFirstLetter } from "$lib/Util";

export const App = initializeApp(Config);
export const Firestore = getFirestore(App);

export async function GetEntry(type: string, id: string, galaxy = "Euclid") {

	galaxy = CapitalizeFirstLetter(galaxy);
	type = CapitalizeFirstLetter(type);

    const res = await getDoc(doc(Firestore, `nmsce/${galaxy}/${type}/${id}`));
    return {exists: res.exists(), data: res.data()}
}

export async function GetLatestEntries(maxCount: number = 50) {

    const res = await getDocs(query(collectionGroup(Firestore, "nmsceCommon"), orderBy("created", "desc"), limit(maxCount)));
    return {
		exists: !res.empty,
		data: res.docs.map(v => v.data())
	};
}
