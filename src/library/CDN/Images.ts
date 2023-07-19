export const BaseUrl = `https://cdn.nmsce.com`;
export const ProjectUrl = `${BaseUrl}/nmsce`;
export const OriginalImageUrl = `${ProjectUrl}/orig`

export function GetOriginalImageUrl(imageName: string): string {
	return `${OriginalImageUrl}/${imageName}`
}