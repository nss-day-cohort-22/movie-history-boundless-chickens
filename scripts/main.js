const auth = require("./auth/auth")
const newMoviesEvent = require("./movieAPI/findMoviesSection")

auth.init()
auth.register()
auth.logout()
newMoviesEvent()
