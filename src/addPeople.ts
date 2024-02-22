import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import {getModel, putItem} from "./services";

export const addPeople = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

    try {
        if (!event.body) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Request body is missing' })
            };
        }

        const {id} = JSON.parse(event.body)
        const people = await getModel("people",id)

        const response = await putItem("Personajes", people);
        console.log(response)

        return {
            statusCode:200,
            body: JSON.stringify(people)
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error })
        };
    }
};

