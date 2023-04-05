import Link from 'next/link'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import DarkModSwitch from './DarkModSwitch'
import MenuItem from './MenuItem'

export default function Header() {
	return (
		<header className="mx-3 flex w-full max-w-6xl items-center justify-between space-y-5 sm:mx-auto">
			<div className="flex items-center">
				<MenuItem title="HOME" address="./" icon={AiFillHome} />
				<MenuItem title="About" address="./about" icon={BsFillInfoCircleFill} />
			</div>
			<div className="flex items-center space-x-4 pr-3">
				<DarkModSwitch />
				<Link href={'./'}>
					<h2 className="text-2xl">
						<span className="mr-3 rounded-lg bg-amber-500 py-1 px-2 font-bold transition-all duration-300">
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
