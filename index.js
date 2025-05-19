import express from 'express';
import {lista, busca, buscaId} from './servicos/servicos.js';


const app = express();

app.get('/uf', (req, res) => {
    const nome = req.query.busca;
    const resultado = nome ? busca(nome) : lista();

    if(resultado.length > 0){
        res.json(resultado);
    } else{
        res.status(400).json({"erro": 'UF não encontrada'});
    }
});


app.get('/uf/:id', (req, res) => {
    const id = buscaId(parseInt(req.params.id));

    if(id){
        res.json(id);
    } else if(isNaN(req.params.id)){
        res.status(400).json({"erro": 'ID inválido'});
    } else{ 
        res.status(404).json({"erro": 'UF não encontrada'});
    }   
});


app.listen(8080, () =>{
    let data = new Date();

    console.log(`Servidor rodando na porta 8080 - ${data.toLocaleDateString()} ${data.toLocaleTimeString()}`);	
})