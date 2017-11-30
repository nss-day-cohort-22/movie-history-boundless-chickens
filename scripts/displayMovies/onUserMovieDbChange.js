const firebase = require("firebase")

const watchForDelete = function () {
	const dbRefObject = firebase.database().ref().child("UserMovies")
	dbRefObject.on("child_removed", snap =>{
		let idOfDivToRemove = snap.key
		document.getElementById(idOfDivToRemove).remove()
		console.log("woot")
	})
}

module.exports = watchForDelete