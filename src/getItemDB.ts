import {getItem} from "./services";

export const getItemDB = async (event) => {

    try {

        const {id} = event.pathParameters


        const response = await getItem("Personajes", Number(id));
        console.log(response)

        return {
            statusCode:200,
            body: response.Item
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error })
        };
    }
};

