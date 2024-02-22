import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {DynamoDBDocumentClient, GetCommand, PutCommand} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const putItem = async (tableName: string, item: any): Promise<any> => {
    const command = new PutCommand({
        TableName: tableName,
        Item: item
    });

    return await docClient.send(command);
}

export const getItem = async (tableName: string, id: number): Promise<any> => {
    const command = new GetCommand({
        TableName: tableName,
        Key: {
            id: id
        }
    });

    return await docClient.send(command)
}



