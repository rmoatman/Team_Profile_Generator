const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber){

        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return this.role;
    }

    getOfficeNumber(){
        return this.officeNumber
    }

}

/* const name = "Raemarie";
const id = 44;
const email = "raemarie.oatman@gmail.com";
const officeNumber = 14110;
const raemarie = new Manager(name, id, email, officeNumber);
console.log(raemarie); */

module.exports = Manager