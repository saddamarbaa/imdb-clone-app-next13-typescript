'use client'

import React, { useState, useEffect } from 'react'
// @ts-ignore
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

import { MovieT } from '@/types'

export default function MovieDetails({ movie }: { movie: MovieT }) {
	const [trailerUrl, setTrailerUrl] = useState('')

	useEffect(() => {
		async function getTrailerUrl() {
			try {
				const fullUrl = await movieTrailer(
					movie?.name || movie?.title || 'Father of the Bride',
				)
				if (fullUrl) {
					const urlParams = new URL(fullUrl).search
					const urlSearchParams = new URLSearchParams(urlParams)
					const movieIdOnYoutube = urlSearchParams.get('v')
					if (movieIdOnYoutube) {
						setTrailerUrl(movieIdOnYoutube)
					}
				}
			} catch (error) {
				console.log(error)
			}
		}

		getTrailerUrl()
	}, [movie])

	return (
		<div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
			{trailerUrl && (
				<div className="absolute top-0 left-0 h-full w-full">
					<YouTube
						videoId={trailerUrl}
						opts={{
							height: '500',
							width: '100%',
							playerVars: {
								autoplay: 1,
							},
						}}
						className="rounded-lg"
					/>
				</div>
			)}
		</div>
	)
}
