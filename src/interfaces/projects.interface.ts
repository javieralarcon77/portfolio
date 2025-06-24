export interface IProject {
	name: string
	slug: string
	description: string
	status: string
}

export interface IQueue {
	name: string
	webhook: string
	sleep: 15
	status: string
}

export interface IInstance {
	name: string
	apiKey: string
	description: string
	status: string
}
