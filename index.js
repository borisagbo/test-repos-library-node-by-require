const {getUsers} = require ("github_user_tdev228");

getUsers().then((users) => {
    console.log(users)})
