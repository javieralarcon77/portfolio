interface IProps extends React.PropsWithChildren {
	title: string
	buttonDone?: React.ReactNode
	closeModal: () => void
}

export const ModalTemplate = ({ title, buttonDone, closeModal, children }: IProps) => {
	return (
		<div
			className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modalTitle"
		>
			<div className="w-full rounded-lg bg-white p-6 shadow-lg">
				<h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl">
					{title}
				</h2>

				{children}

				<footer className="mt-6 flex justify-end gap-2">
					<button
						type="button"
						onClick={closeModal}
						className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
					>
						Cancel
					</button>

					{buttonDone}
				</footer>
			</div>
		</div>
	)
}
