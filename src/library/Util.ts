
export function CapitalizeFirstLetter(value: string, forceLowerCase: boolean = true): string {
	if(forceLowerCase)
		value = value.toLowerCase();
	return value.charAt(0).toUpperCase() + value.slice(1);
}

export function GetEntryUrl(data: any): string {
	return `/Entry/${data.id}`
}