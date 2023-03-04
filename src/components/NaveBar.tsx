import React from 'react'
import NaveBarItem from './NaveBarItem'

export default function NaveBar() {
	return (
		<div className="mt-6 mb-5 flex items-center justify-center space-x-5 bg-amber-100 p-4 dark:bg-gray-600 lg:text-lg">
			<NaveBarItem title="Trending" param="fetchTrending" />
			<NaveBarItem title="Top Rated" param="fetchTopRated" />
		</div>
	)
}
