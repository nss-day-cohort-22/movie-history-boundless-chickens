const firebase = require("firebase")
const observe = require("./observe")
const dbRef = require("./../universal/dbRequestFactory")

var config = {
	apiKey: "AIzaSyDJN0A1DT5JPuial0zWfTH69HMziv1WUAI",
	authDomain: "chickens-movie-his.firebaseapp.com",
	databaseURL: "https://chickens-movie-his.firebaseio.com",
	projectId: "chickens-movie-his",
	storageBucket: "chickens-movie-his.appspot.com",
	messagingSenderId: "354158551188"
}

const auth = Object.create(null, {
	"activeUser": {
		value: null,
		writable: true
	},
	"init": {
		value: function () {
			firebase.initializeApp(config)

			$("#logIn_button").on("click", e => {
				// Validate login information
				this.validate(
					$("#email_input").val(),
					$("#password_input").val()
				)

				// Clear the form
				$("#email_input").val("")
				$("#password_input").val("")
			})

			// Set up authentication observer
			observe.init(this)
		}
	},
	"validate": {
		value: function (email, password) {
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.catch(function (error) {
					const errorCode = error.code
					const errorMessage = error.message

					console.log("Email or password is invalid")
				})
		}
	},
	"logout": {
		value: function () {
			$("#logout_button").on("click",()=>{
				firebase.auth().signOut().then(function() {
				// Sign-out successful.
					console.log("sign out success")
				}).catch(function(error) {
					console.log("error")
				// An error happened.
				})
			})
		}
	},
	"register":{
		value: function () {
			$("#register_button").on("click",()=>{
				const email = $("#email_input").val()
				const password = $("#password_input").val()
				
				//Clear the fields
				$("#email_input").val("")
				$("#password_input").val("")

				const promise = firebase.auth().createUserWithEmailAndPassword(email, password) 
				promise.then((user) => { console.log(user)
					const registeredUser = {
						"UID": `${user.uid}`,
						"Email": `${user.email}`
					}
					dbRef.add(registeredUser, "Users")
				})
					.catch(e => console.log(e.message))
			})
		}
	}
})

module.exports = auth