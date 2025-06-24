const apiUrl = import.meta.env.API_URL

export const getProjects = async () => {
	try {
		const resp = await fetch(`${apiUrl}/projects`)
		const data = await resp.json()
		return data.projects
	} catch (error) {
		console.log(error)
	}
	return []
}

export const getProject = async (slug: string) => {
	try {
		const resp = await fetch(`${apiUrl}/project/${slug}`)
		const data = await resp.json()
		return data.project
	} catch (error) {
		console.log(error)
	}
	return null
}
