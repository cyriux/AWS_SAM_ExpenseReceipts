exports.handler = async (event) => {
    throw new Error('an error from AWS Lambda');
    
    const receipt = {
        issuer: event.issuer,
        expenseDate: event.expenseDate,
        description: event.description,
        amount: event.amount,
        currency: event.currency,
        location: event.location,
    };
    const response = {
        statusCode: 200,
        body: JSON.stringify(receipt),
    };
    return response;
};