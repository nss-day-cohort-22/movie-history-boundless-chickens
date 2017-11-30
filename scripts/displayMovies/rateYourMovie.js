const dbReference = require("./../universal/dbRequestFactory")
// a ridiculously verbose module that is extremely repetitive, bad kolden!
// But it gets the ratings functioning
const rateYourMovie = function () {
	$(document).on("click", (event)=>{
		if(event.target.id.startsWith("1star!")){
			//if events id startswith 1star split it and gather the uid which is the direct key of the userMovie object being modified
			let optionUID = event.target.id.split("!")[1]
			console.log("UID FOUND", optionUID)
			let starFullId = event.target.id
			document.getElementById(starFullId).classList.add("checked")
			const oneStringy = 1
			dbReference.replace(oneStringy,optionUID,"UserMovies","rating" )
			alert("Movie Added To Watched List Rated: 1")
		}
	})
	$(document).on("click", (event)=>{
		if(event.target.id.startsWith("2star!")){
			let optionUID = event.target.id.split("!")[1]
			console.log("UID FOUND", optionUID)
			let starFullId = event.target.id
			document.getElementById(starFullId).classList.add("checked")
			let firstStar = `1star!${optionUID}`
			document.getElementById(firstStar).classList.add("checked")
			const twoStringy = 2
			dbReference.replace(twoStringy,optionUID,"UserMovies","rating" )
			alert("Movie Added To Watched List Rated: 2")
		}
	})
	$(document).on("click", (event)=>{
		if(event.target.id.startsWith("3star!")){
			let optionUID = event.target.id.split("!")[1]
			console.log("UID FOUND", optionUID)
			let starFullId = event.target.id
			document.getElementById(starFullId).classList.add("checked")
			let firstStar = `1star!${optionUID}`
			document.getElementById(firstStar).classList.add("checked")
			let secondStar = `2star!${optionUID}`
			document.getElementById(secondStar).classList.add("checked")
			const threeStringy = 3
			dbReference.replace(threeStringy,optionUID,"UserMovies","rating" )
			alert("Movie Added To Watched List Rated: 3")
		}
	})
	$(document).on("click", (event)=>{
		if(event.target.id.startsWith("4star!")){
			let optionUID = event.target.id.split("!")[1]
			console.log("UID FOUND", optionUID)
			let starFullId = event.target.id
			document.getElementById(starFullId).classList.add("checked")
			let firstStar = `1star!${optionUID}`
			document.getElementById(firstStar).classList.add("checked")
			let secondStar = `2star!${optionUID}`
			document.getElementById(secondStar).classList.add("checked")
			let thirdStar = `3star!${optionUID}`
			document.getElementById(thirdStar).classList.add("checked")
			const fourStringy = 4
			dbReference.replace(fourStringy,optionUID,"UserMovies","rating" )
			alert("Movie Added To Watched List Rated: 4")
		}
	})
	$(document).on("click", (event)=>{
		if(event.target.id.startsWith("5star!")){
			let optionUID = event.target.id.split("!")[1]
			console.log("UID FOUND", optionUID)
			let starFullId = event.target.id
			document.getElementById(starFullId).classList.add("checked")
			let firstStar = `1star!${optionUID}`
			document.getElementById(firstStar).classList.add("checked")
			document.getElementById(firstStar).classList.add("checked")
			let secondStar = `2star!${optionUID}`
			document.getElementById(secondStar).classList.add("checked")
			let thirdStar = `3star!${optionUID}`
			document.getElementById(thirdStar).classList.add("checked")
			let fourthStar = `4star!${optionUID}`
			document.getElementById(fourthStar).classList.add("checked")
			const fiveStringy = 5
			dbReference.replace(fiveStringy,optionUID,"UserMovies","rating" )
			alert("Movie Added To Watched List Rated: 5")
		}
	})
}

module.exports = rateYourMovie