import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

import YouTubeTrailer from './MovieTrailer'

type Props = {
	params: {
		slug: string
	}
}

export const dynamicParams = true
const BASE_URL = 'https://image.tmdb.org/t/p/original'

async function getMovieBySlug(id: string) {
	try {
		const API_KEY = process.env.API_KEY
		const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
		const res = await fetch(url)
		const data = await res.json()

		// if (data.status_code === 34) {
		// 	throw new Error('Movie not found')
		// }

		return data
	} catch (error) {
		console.log(error)
		// throw new Error('Failed to get movie data')
	}
}

export default async function page(props: Props) {
	const movie = await getMovieBySlug(props.params.slug || '')

	if (!movie || (movie && movie?.status_code == 34)) {
		return notFound()
	}

	return (
		<div className="mx-auto  flex w-full max-w-6xl flex-col space-y-8">
			<div className="mt-4 flex flex-col content-center  p-4 md:flex-row md:space-x-6">
				<Image
					src={
						`${BASE_URL}${movie?.backdrop_path || movie?.poster_path}` ||
						`https://image.tmdb.org/t/p/original/4vCh8R4yd6ybOmbxRAPOzaXmLTV.jpg`
					}
					width={500}
					height={320}
					className="rounded-lg"
					style={{
						maxWidth: '100%',
						height: '100%',
						minHeight: '19rem',
						maxHeight: '25rem',
						marginTop: '1rem',
					}}
					placeholder="blur"
					blurDataURL="/spinner.svg"
					alt="Movie poster"></Image>

				<div className="flex flex-col space-y-1 p-2">
					<h2 className="text-lg font-bold">{movie.title || movie.name}</h2>
					<p className="text-lg">
						<span className="mr-1 font-semibold">Overview:</span>
						{movie.overview}
					</p>
					<p className="text-lg">
						<span className="mr-1 font-semibold">Status:</span>
						{movie?.status}
					</p>
					<p>
						<span className="mr-1 font-semibold">Date Released:</span>
						{movie?.release_date || movie?.first_air_date}
					</p>
					<p>
						<span className="mr-1 font-semibold">Popularity:</span>
						{movie?.popularity}
					</p>
					<p>
						<span className="mr-1 font-semibold">Rating:</span>
						{movie?.vote_count}
					</p>
					{movie?.production_companies?.length ? (
						<p>
							<span className="mr-1 font-semibold">Production Company:</span>
							{movie?.production_companies[0]?.name || ''}
						</p>
					) : null}
				</div>
			</div>

			<div className="p-4">
				<YouTubeTrailer movie={movie} />
			</div>
		</div>
	)
}
