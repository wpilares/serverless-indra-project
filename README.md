# Serverless Indra Project

Este proyecto es un servidor sin servidor (serverless) que utiliza AWS Lambda, API Gateway y Node.js con TypeScript. Proporciona dos funciones principales: createItemDB y getItemDB.
## Instalación

Instala de manera global serverless

```
$ npm install -g serverless
```

Instala yarn en la versión 4 e instala las dependencias

```
$ corepack enable
$ yarn set version berry
$ yarn install 
```


## Deployment

```
$ serverless deploy
```

## Uso

Actualmente, ya se encuentra desplegado por lo que se pueden utilizar los endpoints

### 'createItemDB'
El endpoint createItemDB es un método POST que permite crear un nuevo ítem en la base de datos. Utiliza la siguiente URL:

```
POST https://jvydzk4mg4.execute-api.us-east-1.amazonaws.com/{model}/{id}

```

Esta función realiza los siguientes pasos:

1. Busca el ítem correspondiente al modelo y ID proporcionados en la API de Star Wars.
2. Transforma los títulos de las propiedades del ítem al español.
3. Inserta el ítem en la base de datos DynamoDB.
   
Ejemplo de solicitud:


```bash
curl -X POST https://jvydzk4mg4.execute-api.us-east-1.amazonaws.com/films/1
```

### 'getItemDB'
El endpoint getItemDB es un método GET que permite obtener un ítem de la base de datos. Utiliza la siguiente URL:
```
GET https://jvydzk4mg4.execute-api.us-east-1.amazonaws.com/{model}/{id}
```

Esta función realiza los siguientes pasos:

1. Esta función busca el ítem correspondiente al modelo y ID proporcionados en la base de datos DynamoDB y devuelve los títulos de las propiedades en español.

Ejemplo de solicitud:


```bash
curl -X GET https://jvydzk4mg4.execute-api.us-east-1.amazonaws.com/films/1
```

## CI/CD

Se ha configurado un pipeline de integración continua/despliegue continuo (CI/CD) para que se ejecute automáticamente cada vez que se realicen cambios en la rama main. Esto asegura que los cambios se desplieguen de forma automática en el entorno de producción después de pasar las pruebas necesarias.

## Testing


```bash
yarn test
```

