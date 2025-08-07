const apiUrl = import.meta.env.API_URL

export const getProjects = async () => {
	try {
		const resp = await fetch(`${apiUrl}/project`)
		const data = await resp.json()
		if (data.result) {
			return data.projects
		}
	} catch (error) {
		console.log(error)
	}
	return []
}

export const getProject = async (slug: string) => {
	try {
		const resp = await fetch(`${apiUrl}/project/${slug}`)
		const data = await resp.json()
		if (data.result) {
			return data.project
		}
	} catch (error) {
		console.log(error)
	}
	return null
}

export const getExecutionsCount = async (tag: string) => {
	try {
		const resp = await fetch(`${apiUrl}/n8n/executions/count`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ tag: tag })
		})
		const data = await resp.json()
		return data
	} catch (error) {
		console.log(error)
	}
	return { count: 0, executions: [] }
}

export const getInstanceStatus = async (instance: string) => {
	try {
		const resp = await fetch(`${apiUrl}/instance/status`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ instance: instance })
		})
		const data = await resp.json()
		return data
	} catch (error) {
		console.log(error)
	}
	return { result: false, message: 'Algo salio mal' }
}

export const getInstanceQr = async (instance: string) => {
	try {
		const resp = await fetch(`${apiUrl}/instance/qr`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ instance: instance })
		})
		const data = await resp.json()
		return data
	} catch (error) {
		console.log(error)
	}
	return { result: false, message: 'Algo salio mal' }
}

export const deleteInstance = async (instance: string) => {
	try {
		const resp = await fetch(`${apiUrl}/instance/delete`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ instance: instance })
		})
		const data = await resp.json()
		if (data.result) {
			return data
		}
	} catch (error) {
		console.log(error)
	}
	return { result: false, message: 'Algo salio mal' }
}

export const getConversations = async (table: string) => {
	try {
		const resp = await fetch(`${apiUrl}/chats/conversations/?table=${table}`)
		const data = await resp.json()
		if (data.result) {
			return data.conversations
		}
	} catch (error) {
		console.log(error)
	}
	return []
}

export const getMessages = async (table: string, sessionId: string) => {
	try {
		const resp = await fetch(`${apiUrl}/chats/messages/?table=${table}&sessionId=${sessionId}`)
		const data = await resp.json()
		if (data.result) {
			return data.messages
		}
	} catch (error) {
		console.log(error)
	}
	return []
}
