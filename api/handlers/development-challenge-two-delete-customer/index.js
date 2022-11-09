const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const normalizeEvent = require('./normalizer');
const response = require('./response');

exports.handler = async event => {
    if (process.env.DEBUG) {
        console.log({
            message: 'Received event',
            data: JSON.stringify(event),
        });
    }

    const table = event.table || process.env.TABLE;
    if (!table) {
        throw new Error('No table name defined.');
    }

    const {
        pathParameters: { id },
    } = normalizeEvent(event);

    const params = {
        TableName: table,
        Key: {
            id,
        },
        UpdateExpression: 'set isActive = :i',
        ExpressionAttributeValues: {
            ':i': false
        }
    };
    
    try {
        await dynamo.update(params).promise();
        
        console.log({
            message: 'Records has been update',
            data: JSON.stringify(params)
        })
        
        return response(204)
    } catch(err) {
        console.error(err);
        return response(500, 'Somenthing went wrong.');
    }
};