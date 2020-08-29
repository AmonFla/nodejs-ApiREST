const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();
const port = 4000; 

// configuro la api
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

//incluyo los endpotins
const personas = require('./endpoint/personas');

//defino las rutas
app.get('/personas', personas.GetPersonas);
app.get('/personas/:id', personas.GetPersonaById);
app.post('/personas', personas.SavePersona);
app.put('/personas/:id', personas.EditPersona);
app.delete('/personas/:id',personas.DelPersona);

app.listen(port,()=>{
    console.log("ApiREST runnint on port:"+port);
})