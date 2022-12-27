
export function capitalizeFirstLetter(value: string, forceLowerCase: boolean = true): string {
	if(forceLowerCase)
		value = value.toLowerCase();
	return value.charAt(0).toUpperCase() + value.slice(1);
}