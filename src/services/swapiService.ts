import axios from 'axios';
import {translations} from "../helpers";

const SWAPI_BASE_URL = 'https://swapi.py4e.com/api';


export const getModel = async (model: string, id: number): Promise<any> =>  {

    try {
        const response = await axios.get(`${SWAPI_BASE_URL}/${model}/${id}/`);
        const translation = translations[model];

        const mappedData: any = {};

        for (const key in translation) {
            const translatedKey = translation[key];
            mappedData[translatedKey ? translatedKey : key] = response.data[key];
        }

        mappedData.id = id;

        return mappedData;
    } catch (error) {
        throw new Error('Error al obtener el personaje de Star Wars de SWAPI');
    }


}

