import {getItemDB} from "../getItemDB";


describe('getItemDB function', () => {

    test('should return the correct item when given a valid ID', async () => {

        const event = {
            pathParameters: {
                id: '1',
                model: 'people'
            }
        };

        const result = await getItemDB(event);
        expect(result.statusCode).toBe(200);
        const expectedObject = {
            peso: "77",
            nombre: "Luke Skywalker",
            color_cabello: "blond",
            nacimiento: "19BBY",
            color_de_piel: "fair",
            altura: "172",
            id: 1,
            color_ojos: "blue",
            genero: "male"
        };

        expect(JSON.parse(result.body)).toEqual(expectedObject);

    });

    test('should return an error when the item is not found', async () => {

        const event = {
            pathParameters: {
                id: '999',
                model: 'films'
            }
        };

        const result = await getItemDB(event);
        expect(result.statusCode).toBe(400);
        expect(result.body).toEqual(JSON.stringify({ error: 'No se encontró item con el id: 999' }));
    });

});
