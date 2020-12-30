'use strict';
//módulo de teste do próprio node
const assert = require('assert').strict;
// assert.ok(false);

const { getPeople } = require('./service');
const nock = require('nock');

//npm install -g mocha <-- instalação global
//npm i --save-dev mocha <-- somente para realizar testes em sistemas em produção
//instalamos o pacote nock, para simular requisições

describe('Star Wars Tests', function () {
  before(() => {
    //Simular Request API
    const response = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: 'R2-D2',
          height: '96',
          mass: '32',
          hair_color: 'n/a',
          skin_color: 'white, blue',
          eye_color: 'red',
          birth_year: '33BBY',
          gender: 'n/a',
          homeworld: 'http://swapi.dev/api/planets/8/',
          vehicles: [],
          starships: [],
          created: '2014-12-10T15:11:50.376000Z',
          edited: '2014-12-20T21:17:50.311000Z',
          url: 'http://swapi.dev/api/people/3/',
        },
      ],
    };
    //Toda vez que o usuário tentar acessar esta URL abaixo
    nock('https://swapi.dev/api/people')
      //mandar a resposta (reply)
      .get('/?search=r2-d2&format=json')
      .reply(200, response);
  });
  it('deve buscar o r2d2 com o formato correto', async () => {
    const expected = [
      {
        name: 'R2-D2',
        height: '96',
      },
    ];
    const nomeBase = `r2-d2`;
    const resultado = await getPeople(nomeBase);
    assert.strictEqual(resultado, expected);
  });
});
