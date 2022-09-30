const { ResponseHelper } = require("./src/helpers");
// module.exports exports the function getUsers as a promise and exposes it as a module.
// we can import an exported module by using require().
/**
 * Get list of users from dummy user api available on `https://reqres.in/api/users` endpoint
 * @param {string} apiEndpoint API Endpoint. Default set to `https://reqres.in/api/users`
 * @param {string} queryParams Query parameters. Default set to `?page=1&per_page=5`
 * @returns Returns object with user details if api is successful otherwise returns null
 */
module.exports = async function getUsers(
    apiEndpoint = "https://reqres.in/api/users",
    queryParams ="?page=1&per_page=5"
) {
    const axios = require("axios"); // Importing the Axios module to make API requests

    let apiPath = `${apiEndpoint}${queryParams}`;
    let result = {};

    await axios // Making a GET request using axios and requesting information from the API
        .get(apiPath)
        .then((response) => {
            // If the GET request is successful, this block is executed
            return response; // The response of the API call is passed on to the next block
        })
        .then((contests) => {
            // In this block, we store the response data into a variable 'result'
            result.statusCode = contests.status;
            result.message = "Data successfully fetched.";
            result.data = contests.data;
        })
        .catch((err) => {
            result = ResponseHelper.parseApiErrorResponse(err);
        });
    return result; // The contest data is returned
};
