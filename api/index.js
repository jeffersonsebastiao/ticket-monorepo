const Pessoa = require('./Pessoa')

const sandro = new Pessoa('Sandro', "Maciel", 'Legal');
const jefferson = new Pessoa('Jefferson', 'Oliveira', 'Massa')
const fulano = new Pessoa('a', 'b', 'asdf')

sandro.fullName()
jefferson.fullName()
fulano.fullName()

sandro.speaking()
jefferson.speaking()
fulano.speaking()

