const auth = require("./auth/auth")
const newMoviesEvent = require("./movieAPI/findMoviesSection")

auth.init()
auth.logout()
newMoviesEvent()
