import { MovieT } from '@/types'
import Card from './Card'

type Props = {
	movies: MovieT[]
}

export default function Results({ movies }: Props) {
	return (
		<div className="mx-auto max-w-6xl py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{movies?.map((movie) => (
				<Card key={movie.id} movie={movie} />
			))}
		</div>
	)
}
