import { useEffect, useState } from 'react'
import { ModalExecutions } from '../modals/ModalExecutions'

export const CountExecutions = ({ tag }: { tag: string }) => {
	const [count, setCount] = useState(0)
	const [executions, setExecutions] = useState([])
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const getExecutions = async () => {
			const data = await fetch(`/api/projects/executions-count?tag=${tag}`)
			const dataJson = await data.json()
			setExecutions(dataJson.executions)
			setCount(dataJson.count)
		}
		getExecutions()
	}, [tag])

	return (
		<>
			<button
				className="w-full border-none bg-none p-4 sm:w-1/2 md:w-1/4"
				onClick={() => setOpen(true)}
			>
				<div className="rounded-lg border-2 border-gray-200 px-4 py-6">
					<h2 className="title-font text-3xl font-medium text-white">{count}</h2>
					<p className="leading-relaxed">Ejecuciones</p>
				</div>
			</button>
			{open && <ModalExecutions executions={executions} closeModal={() => setOpen(false)} />}
		</>
	)
}
