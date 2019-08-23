const fs = require('fs');

class Journal{
    constructor(){
        this.entries = [];
    }

    addEntry(e){
        ++Journal.count;
        const entry = `${Journal.count}: ${e}`;
        return this.entries.push(entry);
    }

    removeEntry(index){
        delete this.entries[index];
    }

    toString(){
        return Object.values(this.entries).join('\n');
    }
}

Journal.count = 0;



class PersistenceManager{
    constructor(){}
    saveToFile(journal, filename){
        fs.writeFileSync(filename, journal.toString());
    }
    readFileSync(filename){
        return fs.readFileSync(filename, {encoding: 'utf-8'});
    }
}


const j =  new Journal();
j.addEntry('Hello WOrls');
j.addEntry("qqdwd");

const pManager = new PersistenceManager();
pManager.saveToFile(j, './test.txt');

console.log(pManager.readFileSync('./test.txt'));