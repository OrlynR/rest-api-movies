const express =require ('express');
const app = express();
const morgan = require('morgan');

//setting
    // sett conexion al servidor
app.set('port',process.env.PORT || 3000);
    // sett/ arreglar la apariencia del json
app.set('json spaces', 2);   



//middlewares   
app.use(morgan('dev'));

//nos permite entender datos de formularios datos sencillos 
app.use(express.urlencoded({extended:false}));

//permite hacer formato json y entenderlos
app.use(express.json());


//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));

//starting the server
app.listen(app.set('port'), () => {
    console.log(`server on port ${app.set('port')}`)
});
