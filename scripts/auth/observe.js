const firebase = require("firebase")


const observer = Object.create(null, {
	"init": {
		value: function (auth) {
			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					console.log("logged in")
				} else {
					console.log("not logged in")
					auth.activeUser = null
				}
			})
		}
	}
})

module.exports = observer