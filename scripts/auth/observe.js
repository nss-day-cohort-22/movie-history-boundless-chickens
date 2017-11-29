const firebase = require("firebase")

const observer = Object.create(null, {
	"init": {
		value: function (auth) {
			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					auth.activeUser = user
					console.log("logged in")
					$("#navigation").removeClass("hidden")
					$("#mainContent_Section").removeClass("hidden")
					$("#loginAndRegister_section").addClass("hidden")
					$("#landingWelcome_article").removeClass("hidden")
					$("#landingWelcome_article").html(`Welcome <strong>${auth.activeUser.email}</strong>`)
					//make sure these don't display until clicked
					$("#findNewMovies_article").addClass("hidden")
					$("#searchYourMovies_article").addClass("hidden")
				} else {
					console.log("not logged in")
					$("#loginAndRegister_section").removeClass("hidden")
					$("#mainContent_Section").addClass("hidden")
					$("#navigation").addClass("hidden")					
					auth.activeUser = null
				}
			})
		}
	}
})

module.exports = observer