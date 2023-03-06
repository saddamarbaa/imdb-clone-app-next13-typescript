import Image from 'next/image'
import Link from 'next/link'
import { FiThumbsUp } from 'react-icons/fi'
import { Show } from './Results'

type Props = {
	movie: Show
}

export default function Card({ movie }: Props) {
	return (
		<div className="group cursor-pointer rounded-lg transition-shadow duration-200 sm:m-2 sm:border sm:border-slate-400 sm:p-3 sm:shadow-md sm:hover:shadow-slate-400">
			<Link href={`/movie/${movie.id}`}>
				<Image
					src={`https://image.tmdb.org/t/p/original/${
						movie.backdrop_path || movie.poster_path
					}`}
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
					alt="Movie poster or backdrop"
				/>

				<div className=" p-2">
					<p className="text-md line-clamp-7">{movie.overview}</p>
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
