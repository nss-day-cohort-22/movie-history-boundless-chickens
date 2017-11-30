1. git clone repository
2. npm install
3. firebase install
4.1. eslint install
4.2 create an eslint json file
5. run grunt to create bundle in your build folder
6. run httpserver
7. register a new user
8. You will be logged in
9. create a git ignore
add the following to your new gitignore ==
"node_modules
bower_components
__pycache__
*.pyc
bin
obj
*.db
*.sqlite3
.vscode
build
.DS_Store
.eslintrc.json"
10. once logged in you will see a welcome message that greets you by your email
11. click on find movies and search for any movies you'd like, the API queries after 3 keyups
12. click the button under the chosen movie to add to watchlist
13. once movies are added click on the "search your movies" and click the unwatched button, your movies that were added previously will be displayed here
15. From the unwatched tab you can rate a movie or remove it from your unwatched list. Once a movie is rated, it can be modified up until you click out of the unwatched movie tab
16. Under watched movies you will see the movies you have watched with their corresponding rating, these can be removed as well .
17. log out will log your current user out and redirect you to the login form.
18. ---side note: If you add a movie but cannot see it in your unwatched list, it means the API did not provide adequate information and it could not be added.