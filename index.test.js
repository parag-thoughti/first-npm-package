const users = require("./index");
const { LogHelper } = require("./src/helpers");

(async () => {
    let userList = null;

    let apiEndpoint = "https://reqres.in/api/users";
    apiEndpoint = "http://localhost:5000/api/users"
    let queryParams = "?page=1&per_page=5";

    try {
        userList = await users(apiEndpoint, queryParams);
        LogHelper.logMessage("Data found.", userList);
    } catch (userListErr) {
        LogHelper.logError("Error while getting data.", userListErr);
    }
})();
