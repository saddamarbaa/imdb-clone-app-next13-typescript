import Link from 'next/link'
import { IconType } from 'react-icons'

type Props = {
	title: string
	address: string
	icon: IconType
}

export default function MenuItem({ title, address, icon: Icon }: Props) {
	return (
		<div>
			<Link
				href={address}
				className="mx-4 transition-all duration-300 hover:text-amber-600 lg:mx-6">
				<Icon className="mx-4 text-2xl sm:hidden" />
				<p className="mx-2 hidden text-sm sm:inline">{title}</p>
			</Link>
		</div>
	)
}
