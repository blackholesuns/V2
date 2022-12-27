import { CapitalizeFirstLetter } from "$lib/Util";
import { FirebaseProjectId } from "../Environment";

export const BaseUri = "https://firestore.googleapis.com/v1"
export const ProjectUri = `${BaseUri}/projects/${FirebaseProjectId}`
export const DatabaseUri = `${ProjectUri}/databases/(default)`
export const DocumentsUri = `${DatabaseUri}/documents`


export async function GetAPIEntry(type: string, id: string, galaxy = "Euclid") {

	type = CapitalizeFirstLetter(type.toLowerCase())
	galaxy = CapitalizeFirstLetter(galaxy.toLowerCase());

	const response = await fetch(`${DocumentsUri}/nmsce/${galaxy}/${type}/${id}`);
	const result = await response.json();

	if(result.error)
		return {exists: false, data: null};

	return {
		exists: true,
		data: {
			Photo: result.fields.Photo.stringValue,
			Name: result.fields.Name.stringValue,
			System: result.fields.sys.stringValue,
			Type: result.fields.type.stringValue
		}
	}
}