import { text } from 'express';
import { Router } from 'express'
import { dobro, somar, corprimaria, ingresso, freqCaracter, maiorNumero } from './services.js'

const server = Router();


server.get('/corprimaria/:cor', (req, resp) =>{
    try{
        const cores  = req.params.cor;
        const resposta = corprimaria(cores);
        resp.send({
            primaria: resposta
        })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/dia2/freqCaractere/:texto/:caractere', (req, resp) => {
    try{
        const { texto, caractere } = req.params;
        const resposta = freqCaracter(texto, caractere);

        resp.send({
            Frequencia: resposta
        })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/dia2/maiorNumero', (req, resp) => {
    try{
        const { a } = req.body;
        const resposta = maiorNumero(a);
        resp.send({
            maiorn: resposta
        })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/dia2/ingresso', (req, resp) => {
    try{
        const { a, b, c, d } = req.body;
        const resposta = ingresso(a, b, c, d);
        
        
        resp.send({
            total: resposta
        })
    }catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.get('/dobro/:numero', (req, resp) => {
    const numero = Number(req.params.numero);
    const d = dobro(numero)

    resp.send({
        dobro: d
    });
})

server.get('/somar', (req, resp) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const x = somar(a, b)

    resp.send({
        soma: x
    })
})

server.post('/somar', (req, resp) =>{
     try{
    const { valores:{ a, b } } = req.body;

    const x = somar(a, b);
    resp.send({
        soma: x
    })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})


export default server;