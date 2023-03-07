import Card from './Card'

export interface Show {
	adult: boolean
	backdrop_path: string
	id: number
	name: string
	original_language: string
	original_name: string
	overview: string
	poster_path: string
	media_type: string
	genre_ids: number[]
	popularity: number
	first_air_date: string
	vote_average: number
	vote_count: number
	origin_country: string[]
	title: string
	release_date: string
}

type Props = {
	movies: Show[]
}

export default function Results({ movies }: Props) {
	return (
		<div className="mx-auto max-w-6xl py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{movies.map((movie) => (
				<Card key={movie.id} movie={movie} />
			))}
		</div>
	)
}
