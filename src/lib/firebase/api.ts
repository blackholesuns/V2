import { FirebaseProjectId } from "../Environment";


function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function GetAPIEntry(type: string, id: string, galaxy = "Euclid") {
    type = capitalizeFirstLetter(type.toLowerCase())
    galaxy = capitalizeFirstLetter(galaxy.toLowerCase());
    const response = await fetch(`https://firestore.googleapis.com/v1/projects/${FirebaseProjectId}/databases/(default)/documents/nmsce/${galaxy}/${type}/${id}`)
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