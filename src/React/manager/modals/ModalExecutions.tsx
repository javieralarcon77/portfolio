import { ModalTemplate } from '../templates/ModalTemplate'

interface IProps {
	executions: any[]
	closeModal: () => void
}
export const ModalExecutions = ({ executions, closeModal }: IProps) => {
	return (
		<ModalTemplate title="Ejecuciones" closeModal={closeModal}>
			<div className="overflow-x-auto">
				<table className="w-full divide-y divide-gray-200">
					<thead>
						<tr>
							<th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
								Nombre
							</th>
							<th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
								Exitosos
							</th>
							<th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
								Error
							</th>
						</tr>
					</thead>
					<tbody>
						{executions.map((execution: any) => (
							<tr key={execution.name}>
								<td className="px-4 py-2 text-black">{execution.name}</td>
								<td className="px-4 py-2 text-green-500">{execution.success}</td>
								<td className="px-4 py-2 text-red-500">{execution.error}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</ModalTemplate>
	)
}
