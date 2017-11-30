//creates the userMovies object after the movie object is created

const auth = require("./../auth/auth")
const dbRequest = require("./../universal/dbRequestFactory")

const addToWatch = function () {
	document.addEventListener("click",(event) =>{
		
		if (event.target.id.startsWith("selectMovie!")) {
			let movieUID = event.target.id.split("!")[1]
			// make second call to get extra information on the movie a user clicks to add to their watchlist
			$.ajax(`https://api.themoviedb.org/3/movie/${movieUID}?api_key=d272326e467344029e68e3c4ff0b4059&append_to_response=credits`)
				//create an object that holds the details of the movie selected
				.then((movies) => {
					const movieObject = {
						"movieId":`${movieUID}`,
						"movieTitle":`${movies.title}`,
						"releaseDate": `${movies.release_date}`,
						"cast": `${movies.credits.cast[0].name}, ${movies.credits.cast[1].name}, ${movies.credits.cast[2].name}`,
						"img": `<img src='https://image.tmdb.org/t/p/original${movies.poster_path}'>`
					}
					// create an object that holds the information that ties the user to the movie they have selected , user movie id is a combination of the movieUID and activeUser's Id

					const userMoviesObject = {
						"userMovieId":`${auth.activeUser.uid+"!"+movieUID}`,
						"userId":`${auth.activeUser.uid}`,
						"movieId":`${movieUID}`,
						"rating": 0
					}

					dbRequest.add(movieObject, "Movies")
					dbRequest.add(userMoviesObject, "UserMovies")
					alert("Movie Added!!")
					console.log(movieObject)
					console.log(userMoviesObject)
				})
		}
	})
}

module.exports = addToWatch

