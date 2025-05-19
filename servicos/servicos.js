import {listaUF as dados} from '../dados/dados.js';

export const lista = ()=>{
    return dados;
}


export const busca = (nome) =>{
    return dados.filter(uf => uf.nome.toLowerCase().includes(nome.toLowerCase()));
};

export const buscaId = (id) => { 
    return dados.find(uf => uf.id === id);
};