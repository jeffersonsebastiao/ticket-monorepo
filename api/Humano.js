class Humano {
    constructor(speak){
        this.speak = speak;
    }

    speaking() {
        console.log(this.speak)
    }
}

module.exports = Humano