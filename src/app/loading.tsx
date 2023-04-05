/* eslint-disable @next/next/no-img-element */
export default function loading() {
	const loadingItems = Array(16).fill(null)
	return (
		<div className="mx-auto max-w-6xl gap-4 py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{loadingItems.map((_, index) => (
				<div
					key={index}
					className="group m-4 mb-6 flex animate-pulse cursor-pointer flex-col  rounded-lg border   border-slate-400 p-4  shadow-md transition-shadow duration-200 hover:shadow-slate-400 dark:bg-gray-800 sm:m-2 sm:mb-2 sm:p-3">
					<div className="h-64 w-full rounded-lg bg-gray-200 transition-opacity duration-200 group-hover:opacity-80 dark:bg-gray-500 sm:rounded-t-lg"></div>
					<div className="flex-1 space-y-4 py-1">
						<div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-500"></div>
						<div className="space-y-2">
							<div className="h-4 rounded bg-gray-200 dark:bg-gray-500"></div>
							<div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-500"></div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
