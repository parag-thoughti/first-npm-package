const users = require("./index");

(async () => {
    let userList = null;

    let apiEndpoint = "https://reqres.in/api/users";
    let queryParams = "?page=1&per_page=5";

    try {
        userList = await users(apiEndpoint, queryParams);
        console.info(
            "\n=========================>\nuserList: ",
            userList,
            "\n<=========================\n"
        ); // REMOVE console
    } catch (userListErr) {
        console.error(
            "\n=========================>\nuserListErr: ",
            userListErr,
            "\n<=========================\n"
        ); // REMOVE console
    }
})();
