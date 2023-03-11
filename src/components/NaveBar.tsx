import React from 'react'
import NaveBarItem from './NaveBarItem'

export default function NaveBar() {
	return (
		<div className="my-8 flex flex-col flex-wrap items-center justify-center space-y-4  bg-amber-100 p-4 dark:bg-gray-600 sm:flex-row lg:space-y-0 lg:text-lg">
			<NaveBarItem title="Trending" param="fetchTrending" />
			<NaveBarItem title="Originals" param="fetchNetflixOriginals" />
			<NaveBarItem title="Romance" param="fetchRomanceMovies" />
			<NaveBarItem title="Action" param="fetchActionMovies" />
			<NaveBarItem title="War" param="fetchWarMovies" />
			<NaveBarItem title="Comedy" param="fetchComedyMovies" />
			<NaveBarItem title="Crime" param="fetchCrimeMovies" />
			<NaveBarItem title="Documentaries" param="fetchDocumentariesMovies" />
			<NaveBarItem title="Mystery" param="fetchMysteryMovies" />
			<NaveBarItem title="Animation" param="fetchAnimationMovies" />
			<NaveBarItem title="Family" param="fetchFamilyMovies" />
		</div>
	)
}
