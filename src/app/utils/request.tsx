//  TMDB API KEY
const API_KEY = process.env.API_KEY

interface Request {
	[key: string]: {
		title: string
		url: string
	}
}

const request: Request = {
	fetchTrending: {
		title: 'Trending',
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	fetchNetflixOriginals: {
		title: 'Originals',
		url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	},
	fetchRomanceMovies: {
		title: 'Romance',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	fetchActionMovies: {
		title: 'Action',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	fetchWarMovies: {
		title: 'War',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
	},
	fetchComedyMovies: {
		title: 'Comedy',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},

	fetchCrimeMovies: {
		title: 'Crime',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
	},
	fetchDocumentariesMovies: {
		title: 'Documentaries',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	},

	fetchDramaMovies: {
		title: 'Drama',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
	},
	fetchMysteryMovies: {
		title: 'Mystery',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	},
	fetchAnimationMovies: {
		title: 'Animation',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	},
	fetchFamilyMovies: {
		title: 'Family',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
	},
}

export default request
