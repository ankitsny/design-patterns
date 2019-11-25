const { Person } = require("./Person");


class PersonBuilder {
    constructor(person = new Person()){
        this.person = person;
    }

    /**
     * @type {PersonWorkBuilder}
     */
    get works() {
        return new PersonWorkBuilder(this.person); 
    }

    /**
     * @type {PersonLivesBuilder}
     */
    get lives() {
        return new PersonLivesBuilder(this.person)
    }

    build() {
        return this;
    }
}



class PersonWorkBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }

    worksIn(comp) {
        this.person.company = comp;
        return this;
    }

    worksAs(position) {
        this.person.position = position;
        return this;
    }
}

class PersonLivesBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }

    at(add) {
        this.person.address = add;
        return this;
    }

    postal(p) {
        this.person.postal = p;
        return this;
    }
    in(city) {
        this.person.city = city;
        return this;
    }
}


module.exports = {
    PersonBuilder
}