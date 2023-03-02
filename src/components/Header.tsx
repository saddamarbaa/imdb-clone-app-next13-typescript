import Link from 'next/link'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import MenuItem from './MenuItem'

export default function Header() {
	return (
		<header className="mx-3 flex max-w-6xl items-center justify-between space-y-5 sm:mx-auto">
			<div className="flex items-center">
				<MenuItem title="HOME" address="./" icon={AiFillHome} />
				<MenuItem title="About" address="./about" icon={BsFillInfoCircleFill} />
			</div>
			<div>
				<Link href={'./'}>
					<h2 className="text-2xl">
						<span className="mr-2 rounded-lg bg-amber-500 py-1 px-2 font-bold transition-all duration-300 hover:text-amber-600">
							IMDB
						</span>
						<span
							className="hidden text-xl sm:inline
            ">
							Clone
						</span>
					</h2>
				</Link>
			</div>
		</header>
	)
}
