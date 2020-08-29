const data = require("../models/personas");



function GetPersonas(req, res){
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(data.Sample));
}

function GetPersonaById(req, res){
    let personaId = req.params.id;
    let respuesta = data.Sample.find(sample => sample.Id === personaId);
    if (respuesta == null){
        res.sendStatus(404);  
    }else{
        res.set('Content-Type', 'application/json');
        res.send(JSON.stringify(respuesta)); 
    }
}

function SavePersona(req, res){
    data.Sample.push(req.body);
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(data.Sample[data.Sample.length-1])); 
}

function EditPersona(req, res){
    let personaId = req.params.id;
    let index = data.Sample.findIndex(sample => sample.Id === personaId);
    if (index == null){
        res.sendStatus(404);  
    }else{
        data.Sample[index] = req.body
        res.set('Content-Type', 'application/json');
        res.send(JSON.stringify(data.Sample[index])); 
    }
}

function DelPersona(req, res){ 
    let personaId = req.params.id;
    let index = data.Sample.findIndex(sample => sample.Id === personaId);
    if (index == null){
        res.sendStatus(404);  
    }else{
        data.Sample.splice(index,1);
        res.sendStatus(200);  
    }
}

module.exports = {GetPersonas,GetPersonaById,SavePersona,EditPersona,DelPersona};
