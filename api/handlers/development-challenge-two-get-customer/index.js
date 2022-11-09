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

    const { pathParameters } = normalizeEvent(event);

    const params = {
        TableName: table,
        FilterExpression: '#i <> :i',
        ExpressionAttributeNames: {
            '#i': 'isActive'
        },
        ExpressionAttributeValues: {
            ':i': false
        }
        
    };

    try {
        let data = {};
        if (pathParameters && pathParameters['id']) {
            data = await dynamo
                .get({
                    ...params,
                    Key: {
                        id: parseInt(pathParameters['id'], 10),
                    },
                })
                .promise();
            console.log(data)
        } else {
            data = await dynamo.scan(params).promise();
        }

        console.log({
            message: 'Records found',
            data: JSON.stringify(data),
        });
        return response(200, data);
    } catch (err) {
        console.error(err);
        return response(404, {
            message: "Customer not found"
        });
    }
};