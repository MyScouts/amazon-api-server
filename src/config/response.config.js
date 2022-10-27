const successResponse = (res, data, statusCode = 200) => {
    return res.json({ data: data }).status(statusCode);
}
const errorResponse = (res, message, statusCode = 400) => {
    return res.json(message).status(statusCode);
}

module.exports = { successResponse, errorResponse };