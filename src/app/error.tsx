'use client'

import React, { useEffect } from 'react'

interface Props {
	error: Error | null
	rest: () => void
}

export default function ErrorPage({ error, rest }: Props) {
	useEffect(() => {
		console.log('error', error)
		return () => {}
	}, [error])

	return (
		<div className="flex w-full flex-col items-center justify-center p-4 pb-[3rem] pt-[3rem]">
			<div className="max-w-md text-center">
				<h1 className="mb-4 text-5xl">404</h1>
				<div className="text-grey-900 mb-8 text-center">
					We re sorry. something when wrong, please try again later
				</div>
				<div className="flex w-full items-center justify-center">
					<button
						className="ont-bold flex w-full cursor-pointer  items-center justify-center rounded-lg bg-amber-500 py-3 px-4 shadow sm:max-w-[140px]"
						onClick={() => {
							rest()
						}}>
						Rest
					</button>
				</div>
			</div>
		</div>
	)
}
