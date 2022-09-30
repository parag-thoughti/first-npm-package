const ResponseHelper = {
    /**
     * Generate API Response JSON using parameters provided
     *
     * @param {Object} res Response Object
     * @param {Object} req Request Object
     * @param {string} msg Message|Error or Message or Error. (general message, success message or error message. If want to send both message & error, use pipe separated string.). Default is empty string.
     * @param {number} code HTTP Status Code. Default is 400.
     * @param {string[]} data Response Payload. Default is empty array.
     *
     * @returns {string} API Response in JSON format
     */
    generateApiResponse: async function (
        res,
        req,
        msg = "",
        code = 400,
        result = []
    ) {
        var message = "";
        var error = "";
        var requestToken = null;

        if (msg == "" || msg.split("|").length <= 1) {
            message = msg;
            error = msg;
        } else {
            let messages = msg.split("|");
            message = messages[0];
            error = messages[1];
        }

        if (code == 200) {
            error = "";
        }

        if (req != null && typeof req.query.request_token != "undefined") {
            requestToken = req.query.request_token;
        }

        // eslint-disable-next-line no-return-await
        return await res
            .set("Content-Type", "application/json")
            .status(code)
            .json({
                requestToken,
                code,
                message,
                error,
                result,
            });
    },
    parseApiErrorResponse: (err = null) => {
        let errData = {};
        errData.statusCode = 400;
        errData.message = "" + err;
        errData.data = null;

        if (
            typeof err == "undefined" ||
            err == null ||
            err == "" ||
            typeof err.response == "undefined" ||
            err.response == null ||
            err.response == ""
        ) {
            return errData;
        }

        if (
            typeof err.response.status != "undefined" &&
            err.response.status != null &&
            err.response.status != ""
        ) {
            errData.statusCode = err.response.status;
        }

        if (
            typeof err.response.data != "undefined" &&
            err.response.data != null &&
            err.response.data != ""
        ) {
            errData.data = err.response.data;
        }

        return errData;
    },
};

module.exports = ResponseHelper;
