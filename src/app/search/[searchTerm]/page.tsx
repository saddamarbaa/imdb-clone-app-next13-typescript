import Results from '@/components/Results'
import React from 'react'

type Props = {
	params: {
		searchTerm: string
	}
}

export default async function page(props: Props) {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${props.params.searchTerm}&language=en-US&include_adult=false`,
	)

	if (!res.ok) {
		throw new Error('Error fetching data')
	}

	const data = await res.json()
	const results = data?.results || []

	return (
		<div className="mt-2 max-w-6xl p-4 text-center sm:mx-auto">
			{results && results.length === 0 && (
				<h1 className="mt-8 rounded border bg-transparent p-6 font-bold">
					No results found
				</h1>
			)}
			{results && <Results movies={results} />}
		</div>
	)
}
