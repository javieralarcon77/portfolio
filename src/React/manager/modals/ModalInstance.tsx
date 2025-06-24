import { useEffect, useState } from 'react'
import { IInstance } from '@/interfaces/projects.interface'
import { ModalTemplate } from '../templates/ModalTemplate'

const API_URL = import.meta.env.PUBLIC_API_URL

interface IProps {
	instance: IInstance
	closeModal: () => void
}

export const ModalInstance = ({ instance, closeModal }: IProps) => {
	const [status, setStatus] = useState('Loading...')
	const [qr, setQr] = useState('')

	useEffect(() => {
		const getStatus = async () => {
			const response = await fetch(`${API_URL}/instance/status`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ instance: instance.instance })
			})
			const data = await response.json()
			setStatus(data.status)
		}

		const getQr = async () => {
			const response = await fetch(`${API_URL}/instance/qr`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ instance: instance.instance })
			})
			const data = await response.json()
			setQr(data.qr)
		}
		getStatus()
		getQr()
	}, [instance])

	return (
		<ModalTemplate title={`Instancia ${instance.instance}`} closeModal={closeModal}>
			<>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">API Key</label>
					<p className="text-pretty text-gray-700">{instance.apikey}</p>
				</div>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Status <span className="text-gray-500">({status})</span>
					</label>
				</div>
				{qr && <img src={qr} alt="QR" width="100%" />}
			</>
		</ModalTemplate>
	)
}
