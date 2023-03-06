'use client'

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

type Props = {
	title: string
	param: string
}

export default function NaveBarItem({ title, param }: Props) {
	const searchParams = useSearchParams()
	const genre = searchParams.get('genre')
	return (
		<div className="">
			<Link
				className={`m-4 font-semibold transition-all duration-300 hover:text-amber-600 ${
					genre && genre === param
						? 'rounded-lg text-amber-500 underline decoration-amber-600 decoration-4 underline-offset-8'
						: ''
				}`}
				href={`/?genre=${param}`}>
				{title}
			</Link>
		</div>
	)
}
