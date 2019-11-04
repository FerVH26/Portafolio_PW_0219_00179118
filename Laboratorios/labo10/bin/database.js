var mongoose =require('mongoose');
let database='registroAPI';
let port='27017';
let host='localhost';
let uri=`mongodb://${host}:${port}/${database}`;
const connectDB=()=>{
    mongoose.Promise= global.Promise;
    mongoose.connect(uri, {useNewUrlParser:true})
        .then(()=>{
        console.log("la conexion de la bnase de datos a sido exitosa")
        })
        .catch(()=>{
        console.log("un error a la hora de conectarse")
        })
}
module.exports ={
    connectDB,
}