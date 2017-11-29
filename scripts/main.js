const auth = require("./auth/auth")
const newMoviesEvent = require("./movieAPI/findMoviesSection")
const displayMoviesEventListener = require("./displayMovies/displayMoviesSection")

auth.init()
auth.register()
auth.logout()
newMoviesEvent()
displayMoviesEventListener()
