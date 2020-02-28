exports.handler = async (event) => {
    const range = {
        startDate: event.startDate,
        endDate: event.endDate,
    };
    const response = {
        statusCode: 200,
        body: JSON.stringify([]),
    };
    return response;
};
