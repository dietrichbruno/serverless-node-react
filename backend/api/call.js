const statement = (statusCode, data) => {
    return {
        statusCode,
        body: JSON.stringify(data),
        headers: {
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Methods': "PUT, POST, DELETE, GET",
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'application/json'
        }
    }
};

module.exports = {
    statement
}