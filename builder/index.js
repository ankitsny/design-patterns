const { PersonBuilder } = require('./builders')

const pb = new PersonBuilder();
const p1 = pb
            .lives.at("HSR Layout").postal(123456).in("Bangalore")
            .works.worksIn("Merck").worksAs("SDE-I")
            .build();
            
console.log(JSON.stringify(p1, null, 2));