import Results from '@/components/Results'
import request from './utils/request'

const API_KEY = process.env.API_KEY

interface HomeProps {
	searchParams: {
		genre?: keyof typeof request
	}
}

export default async function Home({ searchParams }: HomeProps) {
	const genre = searchParams.genre || 'fetchTrending'

	let url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`

	if (request[genre]?.url) {
		url = `https://api.themoviedb.org/3${request[genre].url}`
	}
	const res = await fetch(url, { next: { revalidate: 10000 } })

	if (!res.ok) {
		// this will be caught by the error page and passed to the page as props
		throw new Error('Failed to fetch data')
	}

	const data = await res.json()

	const results = data?.results || []

	return (
		<div>
			<Results movies={results} />
		</div>
	)
}
