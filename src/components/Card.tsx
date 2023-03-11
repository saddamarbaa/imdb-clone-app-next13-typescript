import { MovieT } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { FiThumbsUp } from 'react-icons/fi'

type Props = {
	movie: MovieT
}

const BASE_URL = 'https://image.tmdb.org/t/p/original'

export default function Card({ movie }: Props) {
	return (
		<div className="group m-4 mb-6 cursor-pointer rounded-lg border border-slate-400 shadow-md transition-shadow duration-200 hover:shadow-slate-400 sm:m-2 sm:mb-2 sm:p-3">
			<Link href={`/movie/${movie.id}`}>
				<Image
					src={
						movie?.poster_path || movie?.backdrop_path
							? `${BASE_URL}${movie?.backdrop_path || movie?.poster_path}`
							: `https://image.tmdb.org/t/p/original/4vCh8R4yd6ybOmbxRAPOzaXmLTV.jpg`
					}
					width={500}
					height={300}
					className="transition-opacity duration-200 group-hover:opacity-80 sm:rounded-t-lg"
					style={{
						maxWidth: '100%',
						height: 'auto',
						objectFit: 'cover',
						borderRadius: '0.5rem',
						minHeight: '11rem',
						maxHeight: '11rem',
					}}
					placeholder="blur"
					blurDataURL="/spinner.svg"
					alt="Movie poster or backdrop is not available"
				/>

				<div className=" p-2">
					<p className="text-md line-clamp-6">{movie.overview}</p>
					<h2 className="truncate text-lg font-bold">
						{movie?.title || movie.name}
					</h2>
					<p className="flex items-center">
						{movie?.release_date || movie.first_air_date}
						<FiThumbsUp className="mr-1 ml-3 h-5" /> {movie.vote_count}
					</p>
				</div>
			</Link>
		</div>
	)
}
