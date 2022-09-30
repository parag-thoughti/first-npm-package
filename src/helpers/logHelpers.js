const LogHelper = {
    /**
     * Log error message to console. This function will only work when `NODE_ENV` is not set to `production`
     * @param {string} msg Error Message
     * @param {object} err Actual error stack object
     */
    logError: (msg = "Something went wrong.", err = null) => {
        let ERROR_LOG_LEVEL = process.env.ERROR_LOG_LEVEL || "trace";
        let NODE_ENV = process.env.NODE_ENV || "development";
        if (NODE_ENV != "production") {
            // eslint-disable-next-line no-console
            console[ERROR_LOG_LEVEL](
                "\n\n\n=========================>\nError Start\n=========================>\nTimestamp: " +
                    new Date() +
                    "\n" +
                    msg +
                    "\n\n",
                "Error Stack: ",
                "\n",
                err,
                "\n<=========================\nError End\n<=========================\n"
            );
        }
    },
    /**
     * Log general message to console. This function will only work when `NODE_ENV` is not set to `production`
     * @param {string} msg Message
     * @param {any} data Data to be shown along with message. Default is `null`
     */
    logMessage: (msg = "Task completed successfully.", data = null) => {
        let LOG_LEVEL = process.env.LOG_LEVEL || "log";
        let NODE_ENV = process.env.NODE_ENV || "development";
        if (NODE_ENV == "production") {
            return;
        }

        if (data != null) {
            // eslint-disable-next-line no-console
            console[LOG_LEVEL](
                "\n\n\n=========================>\nMessage Start\n=========================>\nTimestamp: " +
                    new Date(),
                "\n",
                msg,
                "\n\n",
                data,
                "\n<=========================\nMessage End\n<=========================\n"
            );
            return;
        }
        // eslint-disable-next-line no-console
        console[LOG_LEVEL](
            "\n=========================>\nMessage Start\n=========================>\nTimestamp: " +
                new Date(),
            "\n",
            msg,
            "\n<=========================\nMessage End\n<=========================\n"
        );
        /** */
    },
};

module.exports = LogHelper;
