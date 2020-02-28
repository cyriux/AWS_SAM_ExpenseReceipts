const AWS = require("aws-sdk");
const uuidv4 = require("uuid/v4");

const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    
    const expenseId = uuidv4();

    const receipt = {
        issuer: event.issuer,
        expenseDate: event.expenseDate,
        description: event.description,
        amount: event.amount,
        currency: event.currency,
        location: event.location,
    };

    await documentClient.put({
        TableName: "Expense",
        Item: {
            expenseId: uuidv4(),
            ...receipt
        }
      }).promise();    

    const response = {
        statusCode: 200,
        body: JSON.stringify(expenseId),
    };
    return response;
};