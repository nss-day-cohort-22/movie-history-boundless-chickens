const findMoviesFunction = function () {
	$("#landingWelcome_article").addClass("hidden")
	$("#findNewMovies_article").removeClass("hidden")
	$("#search-movie").keyup(getMovies)
  
	function getMovies() {
		let searchTerm = $("#search-movie").val()
		if (searchTerm.length >= 3){
			$.ajax("https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=" + searchTerm)
				.then(function(movies) {
					let listOfMovies = movies.results
					console.log(listOfMovies)
					let noUndefined = listOfMovies.filter((currentItem)=>{
						return currentItem.poster_path !== null && currentItem.title !== undefined
					})
					console.log(noUndefined)
      
					let htmlListOfMovies = ""
					for(var i =0; i < noUndefined.length; i++) {
						htmlListOfMovies += `
            <div class='image-container'>
              <h1>
              ${noUndefined[i].title}<br>
              Release Date: ${noUndefined[i].release_date}
              </h1>
              <img src='https://image.tmdb.org/t/p/original${noUndefined[i].poster_path}'><br>
              <button id='selectMovie!${noUndefined[i].id}'>Add To Watchlist </button>
            </div>`
					}

					$("#moviesFromSearch_section").html(htmlListOfMovies)
				})
				.fail(function(error) {
					$("#moviesFromSearch_section").html(error.responseText)
				})
		}
	}
}

module.exports = findMoviesFunction