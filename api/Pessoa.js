const Humano = require('./Humano')

class Pessoa extends Humano {
    constructor(name, lastName, speak) {
        super(speak)
        this.name = name;
        this.lastName = lastName;

        if (!this.name || !this.lastName) {
            throw new Error('Passe valores no construtor')
        }
    }

    fullName() {
        console.log(this.name + ' ' + this.lastName)
    }
}



module.exports = Pessoa

