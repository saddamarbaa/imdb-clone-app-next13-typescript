import Link from 'next/link'
import React from 'react'

export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center border-t py-[3.2rem] dark:border-t-slate-500">
			<div className="flex items-center">
				<span className="mr-2">© 2023 Copyright: </span>
				<Link
					className="font-bold text-amber-500 hover:underline"
					href={`https://github.com/saddamarbaa`}>
					Saddam Arbaa
				</Link>
			</div>

			<div className="mt-4 text-center">
				Want to see how I built this website? Check out my
				<Link
					href="https://github.com/saddamarbaa/imdb-clone-app-next13-typescript"
					passHref={true}
					legacyBehavior={true}>
					<a
						target="_blank"
						className="font-bold text-amber-500 hover:underline">
						{' Github repository '}
					</a>
				</Link>
				<p className="mt-1">
					for the source code, and learn about the technologies and techniques I
					used to create it.
				</p>
			</div>
		</footer>
	)
}
