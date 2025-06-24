import { useState } from 'react'
import { ModalAddInstance } from '../modals/ModalAddInstance'

interface IProps {
	projectId: string
}

export const AddInstance = ({ projectId }: IProps) => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<button
				className="rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
				onClick={() => setOpen(true)}
			>
				Agregar Instancia
			</button>
			{open && <ModalAddInstance projectId={projectId} closeModal={() => setOpen(false)} />}
		</>
	)
}
