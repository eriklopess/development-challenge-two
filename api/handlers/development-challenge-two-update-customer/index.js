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

    const { data } = normalizeEvent(event);

    const params = {
        TableName: table,
        Key: {
            id: parseInt(data.id, 10),
        },
        UpdateExpression: 'SET #n = :r, address = :a, email = :e, birthData = :b',
        ExpressionAttributeValues: {
            ':r': data.name,
            ':a': data.address,
            ':e': data.email,
            ':b': data.birthDate
            
        },
        ExpressionAttributeNames: {
            '#n': 'name'
        }
    };

    try {
        await dynamo.update(params).promise();

        console.log({
            message: 'Record has been update',
            data: JSON.stringify(params),
        });

        return response(200, data);
    } catch (err) {
        console.error(err);
        return response(500, err);
    }
};