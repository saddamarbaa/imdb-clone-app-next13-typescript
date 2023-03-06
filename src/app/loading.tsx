import React from 'react'
import { BeatLoader } from 'react-spinners'

export default function loading() {
	return (
		<div className=" mx-auto w-full  max-w-[82rem]  items-center p-4 sm:flex">
			<div className="mb-[1.2rem] flex w-full  items-center justify-center py-28">
				<span className="pt-2">
					<BeatLoader color="#FFA500" />
				</span>
			</div>
		</div>
	)
}
