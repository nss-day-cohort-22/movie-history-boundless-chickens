//creates the userMovies object after the movie object is created

const auth = require("./../auth/auth")

const addToWatch = function () {
	document.addEventListener("click", (event)=>{
		if(event.target.id.startsWith("selectMovie!")){
			let movieUID = event.target.id.split("!")[1]
			console.log(movieUID)
			$.ajax(`https://api.themoviedb.org/3/movie/${movieUID}?api_key=d272326e467344029e68e3c4ff0b4059&append_to_response=credits`)
				.then((movies)=>{
					console.log(movies)
					const movieObject = Object.create(null,{
						"movieId":{value:`${movieUID}`},
						"movieTitle":{value: `${movies.title}`},
						"releaseDate": {value:`${movies.release_date}`},
						"cast": {value:`${movies.credits.cast[0].name}, ${movies.credits.cast[1].name}, ${movies.credits.cast[2].name}`},
						"img": {value:`<img src='https://image.tmdb.org/t/p/original${movies.poster_path}'>`}
					})
					const userMoviesObject = Object.create(null,{
						"userMovieId":{value:`${auth.activeUser.uid+"!"+movieUID}`},
						"userId":{value: `${auth.activeUser.uid}`},
						"movieId":{value: `${movieUID}`},
						"rating": {
							value: null,
							writable:true
						}
					})
					console.log(movieObject)
					console.log(userMoviesObject)
				})
		}
	})
}
  
module.exports = addToWatch
  
  