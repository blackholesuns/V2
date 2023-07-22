export const BaseUrl = `https://cdn.nmsce.com`;
export const ProjectUrl = `${BaseUrl}/nmsce`;
export const OriginalImageUrl = `${ProjectUrl}/orig`
export const DisplayImageUrl = `${ProjectUrl}/orig`
export const ThumbImageUrl = `${ProjectUrl}/disp/thumb`

export function GetOriginalImageUrl(imageName: string): string {
	return `${OriginalImageUrl}/${imageName}`
}

export function GetDisplayImageUrl(imageName: string): string {
	return `${DisplayImageUrl}/${imageName}`
}

export function GetThumbImageUrl(imageName: string): string {
	return `${ThumbImageUrl}/${imageName}`
}