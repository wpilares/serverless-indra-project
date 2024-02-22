import {getItem} from "./services";
import {modelTranslations} from "./helpers";

export const getItemDB = async (event) => {

    try {
        const {id, model} = event.pathParameters
        const translatedModel = modelTranslations[model] || model;
        const response = await getItem(translatedModel, Number(id));

        if (typeof response.Item === 'undefined') {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ error: `No se encontró item con el id: ${id}` })
                };
        }

        return {
            statusCode: 200,
            body: JSON.stringify(response.Item)
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error })
        };
    }
};

