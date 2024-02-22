import { APIGatewayProxyResult } from 'aws-lambda';
import { getModel, putItem } from "./services";
import { modelTranslations } from "./helpers";

export const createItemDB = async (event): Promise<APIGatewayProxyResult> => {

    try {
        const {id, model} = event.pathParameters
        const people = await getModel(model,Number(id))
        const translatedModel = modelTranslations[model] || model;
        await putItem(translatedModel, people);


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

