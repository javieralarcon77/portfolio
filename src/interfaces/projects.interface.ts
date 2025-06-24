export interface IProject {
	name: string
	slug: string
	description: string
	status: string
	queue: IQueue[]
	instance: IInstance[]
}

export interface IQueue {
	id: string
	queue: string
	webhook: string
	sleep: number
	status: string
}

export interface IInstance {
	id: string
	instance: string
	apikey: string
	description: string
	status: string
}
