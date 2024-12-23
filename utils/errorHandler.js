class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;

        // Create a stack trace property
        Error.captureStackTrace(this, this.constructor);
        console.log("Error handler initialized");
    }
}

module.exports = ErrorHandler;