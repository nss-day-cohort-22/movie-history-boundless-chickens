const findMoviesFunction = function () {
	$("#landingWelcome_article").addClass("hidden")
	$("#findNewMovies_article").removeClass("hidden")
	$("#search-movie").keyup(getMovies)
  
	function getMovies() {
		let searchTerm = $("#search-movie").val()
		if (searchTerm.length >= 3){
			// Initial call to query the api and match search results from search term to a matching movie title
			$.ajax("https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=" + searchTerm)
				.then(function(movies) {
					let listOfMovies = movies.results
					//filters out the results that do not have a valid poster path or title
					let noUndefined = listOfMovies.filter((currentItem)=>{
						return currentItem.poster_path !== null && currentItem.title !== undefined
					})
					let htmlListOfMovies = ""
					for(var i =0; i < noUndefined.length; i++) {
						// Create the html that will represent each result that needs to be displayed
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
					// assigns the final built string above to the innerhtml of the movies' search section
					$("#moviesFromSearch_section").html(htmlListOfMovies)
				})
				.fail(function(error) {
					$("#moviesFromSearch_section").html(error.responseText)
				})
		}
	}
}

module.exports = findMoviesFunction