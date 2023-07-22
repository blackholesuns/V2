import { EntryUrl, UserUrl } from "./routes";

export function CapitalizeFirstLetter(value: string, forceLowerCase: boolean = true): string {
	if(forceLowerCase)
		value = value.toLowerCase();
	return value.charAt(0).toUpperCase() + value.slice(1);
}

export function GetEntryUrl(data: any): string {
	return `${EntryUrl}/${data.id}`
}

export function GetUserUrl(data: any): string {
	return `${UserUrl}/${data.id}`
}