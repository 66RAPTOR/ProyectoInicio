const express = require('express'); // para cargar un servidor
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('graphql-server-express') // me va ayudar a conectar el graphQl con el web que es el express
//ejecute una api de manera normal desde el protocolo http 
//grapi intalar en un cliente para hacer consultas al servidor 


const PORT =3000;
const endPoint ='pizza_api';
const schema ={};

let server = express();

server.use(endPoint, bodyParser.json(), graphqlExpress({
    schema
}));

server.use('/graphiql',graphiqlExpress({
    endpointURL: endPoint,
}))

server.listen(PORT, () => {
    console.log('GraphQL API listen in http://localhost:'+PORT+'/'+endPoint);
    console.log('GraphiQL listen in http://localhost:'+PORT+'/graphiql');

})

// implementado un proyecto node , en un servicio web



//const {db}=require("./cnn");


console.log("OK !!!");