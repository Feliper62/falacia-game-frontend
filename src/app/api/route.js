const base_url = 'https://falacia-game-backend-production.up.railway.app/';

export const api_usuarios = {
  url: base_url + 'usuarios/',
  retorna_todos: async function () {
    let response = await fetch(api_usuarios.url, {method: 'GET', cache: 'no-store'});
    return await response.json();
  },
  retorna_um: async function (id) {
    let response = await fetch(api_usuarios.url + id + '/', {method: 'GET', cache: 'no-store'});
    return await response.json();
  },
  criar: async function (body) {
    let response = await fetch(api_usuarios.url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)});
    return await response.json();
  },
  atualizar: async function (body) {
    let response = await fetch(api_usuarios.url, {method: 'PUT', body: JSON.stringify(body)});
    return await response.json();
  },
  deletar: async function (id) {
    let response = await fetch(api_usuarios.url + id + '/', {method: 'DELETE'});
    return await response.json();
  }
};

export const api_sessoes = {
  url: base_url + 'sessoes/',
  retorna_todos: async function () {
    let response = await fetch(api_sessoes.url, {method: 'GET', cache: 'no-store'});
    return await response.json();
  },
  retorna_um: async function (id) {
    let response = await fetch(api_sessoes.url + id + '/', {method: 'GET', cache: 'no-store'});
    return await response.json();
  },
  retorna_usuarios: async function (id) {
    let response = await fetch(api_sessoes.url + id + '/usuarios/', {method: 'GET', cache: 'no-store'});
    return await response.json();
  },
  criar: async function (body) {
    let response = await fetch(api_sessoes.url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)});
    return await response.json();
  },
  atualizar: async function (body) {
    let response = await fetch(api_sessoes.url, {method: 'PUT', body: JSON.stringify(body)});
    return await response.json();
  },
  deletar: async function (id) {
    let response = await fetch(sessoes.url + id + '/', {method: 'DELETE'});
    return await response.json();
  }
};