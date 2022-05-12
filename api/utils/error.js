//Error handling function for the API requests
export const createError = (status, message) => {
    const error = new Error()
    error.status = status
    error.message = message
    return error
}