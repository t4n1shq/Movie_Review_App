// This is our TMDB API config which contains:
// 1.The base URL
// 2.API KEY
// 3.Headers
// Read the TMDB API docs for further information

export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query?
    `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`:
    `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

    const response = await fetch( endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    }) // response to the query

    if(!response.ok){
        // @ts-ignore
        throw new Error('Failed to fetch movies', response.statusText)
    } // execute if the response is not ok

    const data = await response.json();

    return data.results; // look into TMDB API docs on the structure of the response
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTQzZTMyM2E2MGJiMjhiN2E0ZDQ2ZWJhYmZlMDdlYiIsIm5iZiI6MTczOTQ0MzUyMy40MTQsInN1YiI6IjY3YWRjZDQzODExZmMyZGI4N2QwYmQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jCwcsmtI8bauKHWMlNztn4SNkv7TsGSzMGQkwKhyrXY'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));