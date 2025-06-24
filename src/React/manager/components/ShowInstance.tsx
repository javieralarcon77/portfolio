import React, { useState } from 'react'

import { IInstance } from '@/interfaces/projects.interface'
import { ModalInstance } from '@/React/manager/modals/ModalInstance'

interface IProps {
	instance: IInstance
}

export const ShowInstance = ({ instance }: IProps) => {
	const [open, setOpen] = useState(false)
	return (
		<>
			{open && <ModalInstance instance={instance} closeModal={() => setOpen(false)} />}
			<button
				className="text-blue-gray-900 block font-sans text-sm font-medium leading-normal antialiased"
				onClick={() => setOpen(!open)}
			>
				Ver
			</button>
		</>
	)
}
