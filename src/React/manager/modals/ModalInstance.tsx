import { useEffect, useState } from 'react'
import { IInstance } from '@/interfaces/projects.interface'
import { ModalTemplate } from '../templates/ModalTemplate'

interface IProps {
	instance: IInstance
	closeModal: () => void
}

export const ModalInstance = ({ instance, closeModal }: IProps) => {
	const [data, setData] = useState({ status: 'Loading...', number: '' })
	const [qr, setQr] = useState('')

	useEffect(() => {
		const getStatus = async () => {
			const response = await fetch(`/api/projects/instance/status?instance=${instance.instance}`)
			const data = await response.json()
			setData(data.data)
		}

		const getQr = async () => {
			const response = await fetch(`/api/projects/instance/qr?instance=${instance.instance}`)
			const data = await response.json()
			setQr(data.qr)
		}
		getStatus()
		getQr()
	}, [instance])

	const deleteInstance = async () => {
		const response = await fetch(`/api/projects/instance-delete?instance=${instance.instance}`)
		const data = await response.json()
		if (data.result) {
			window.location.reload()
		} else {
			alert(data.message)
		}
	}

	return (
		<ModalTemplate
			title={`Instancia ${instance.instance}`}
			closeModal={closeModal}
			buttonDone={
				<button
					type="button"
					onClick={deleteInstance}
					className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
				>
					Eliminar
				</button>
			}
		>
			<>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">API Key</label>
					<p className="text-pretty text-gray-700">{instance.apikey}</p>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Status <span className="text-gray-500">({data.status})</span>
					</label>
					<p className="text-pretty text-gray-700">{data.number}</p>
				</div>
				{qr && <img src={qr} alt="QR" width="100%" />}
			</>
		</ModalTemplate>
	)
}
