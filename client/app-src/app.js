import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import 'bootstrap/js/modal.js';
import '../css/meucss.css';

import { NegociacaoController } from './controllers/NegociacaoController';
import { Negociacao } from './domain/index';

const controller = new NegociacaoController();

/*
$('h1').on('click', () => alert('Foi clicado!'));

console.log('Função adicionada pelo bootstrap: ');
console.log($('h1').modal);


const negociacao = new Negociacao(new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');
const body = JSON.stringify(negociacao);

const method = 'POST';
const config = {
  method,
  headers,
  body
};

fetch(`${SERVICE_URL}/negociacoes`, config)
  .then(() => console.log('Dado enviado com Sucesso'));
*/