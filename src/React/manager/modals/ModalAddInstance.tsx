import { ModalTemplate } from '../templates/ModalTemplate'

const API_URL = import.meta.env.PUBLIC_API_URL

interface IProps {
	projectId: string
	closeModal: () => void
}

export const ModalAddInstance = ({ projectId, closeModal }: IProps) => {
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const name = formData.get('name')
		const description = formData.get('description')

		const response = await fetch(`${API_URL}/instance`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, description, projectId })
		})
		const data = await response.json()
		if (data.result) {
			window.location.reload()
		} else {
			alert(data.message)
		}
	}

	return (
		<ModalTemplate
			title="Agregar Instancia"
			closeModal={closeModal}
			buttonDone={
				<button
					type="submit"
					form="formInstance"
					className="rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
				>
					Agregar
				</button>
			}
		>
			<form onSubmit={onSubmit} id="formInstance">
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">Nombre de la instancia</label>
					<input
						type="text"
						name="name"
						className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">Descripción</label>
					<textarea
						name="description"
						className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
				</div>
			</form>
		</ModalTemplate>
	)
}
