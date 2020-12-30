const assert = require('assert');

const database = require('./database');
const DEFAULT_ITEM_CADASTRAR = {
  name: 'Flash',
  poder: 'Speed',
  id: 1,
};

describe('Suite de manipulação de Heróis', () => {
  it('Deve pesquisar um herói, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [resultado] = await database.list(expected.id);
    assert.strictEqual(resultado, expected);
  });
});
