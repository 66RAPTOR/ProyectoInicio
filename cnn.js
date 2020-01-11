const pgPromise  = require("pg-promise"); //PARA LA CONEXION DE LA BASE DE DATROS CON POSTGRES


const pgp =pgPromise({});

const config ={
    host: 'localhost',
    port: '5432',
    database: 'pizza',
    user: 'postgres',
    password: 'raperez'
}

const db =pgp(config);

db.any('select * from pizza').then(res =>{ console.log(res); })