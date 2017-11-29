const firebase = require("firebase")
const firebaseURL = "https://chickens-movie-his.firebaseio.com/"
// const firebaseURL = "https:chickens-movie-his.firebaseio.com"


const requestFactory = Object.create(null, {
	"cache": {
		value: null,
		writable: true
	},
	"all": {
		value: function (areaInDb) {
			return $.ajax({
				"url": `${firebaseURL+areaInDb}/.json`,
				"method": "GET"
			}).then(articles => {
				this.cache = Object.keys(articles)
					.map(key => {
						articles[key].id = key
						return articles[key]
					})

				return this.cache
			})
		}
	},
	// "add": {
	// 	value: function (article) {
	// 		return $.ajax({
	// 			"url": `${firebaseURL}/.json`,
	// 			"method": "POST",
	// 			"data": JSON.stringify(article)
	// 		})
	// 	}
	// },
	"add": {
		value: function (article, areaInDb) {
			return firebase.auth().currentUser.getIdToken(true)
				.then(idToken => {
					const stringifiedMovie = JSON.stringify(article)
					return $.ajax({
						"url": `${firebaseURL+areaInDb}/.json?auth=${idToken}`,
						"method": "POST",
						"data": stringifiedMovie
					})
				}).catch(function(error) {
					notify.log("Error while adding the article. Please try again.")
				})
		}
	},
	"remove": {
		value: function (id) {
			return firebase.auth().currentUser.getIdToken(true)
				.then(idToken => {
					return $.ajax({
						"url": `${firebaseURL}/${id}/.json`,
						"method": "DELETE"
					})
				}).catch(function(error) {
					notify.log("Error while deleting the article. Please try again.")
				})
		}
	},
	"replace": {
		value: function (article, id) {
			return firebase.auth().currentUser.getIdToken(true)
				.then(idToken => {
					return $.ajax({
						"url": `${firebaseURL}/${id}/.json`,
						"method": "PUT",
						"data": JSON.stringify(article)
					})
				}).catch(function(error) {
					notify.log("Error while updating the article. Please try again.")
				})
		}
	}
})


module.exports = requestFactory