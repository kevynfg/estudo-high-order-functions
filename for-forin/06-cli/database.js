const { readFile, readFileSync, writeFileSync } = require('fs');
//promisify é para manipular arquivos que usam async/await
class Database {
  constructor() {
    this.FILE_NAME = 'herois.json';
  }
  async getFile() {
    const file = await readFileSync(this.FILE_NAME, 'utf8');
    return JSON.parse(file.toString());
  }
  writeFile() {}
  async list(id) {
    const data = await this.getFile();
    //Se não passar ID pelo parâmetro, trazer a lista completa, se não
    //filtrar somente o que foi passado
    const filteredData = data.filter((item) => {
      id ? item.id === id : true;
    });
    return filteredData;
  }
}

module.exports = new Database();
