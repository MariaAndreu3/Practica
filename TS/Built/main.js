Object.defineProperty(exports, "__esModule", { value: true});

const person_1 = require("./classes/person");
const address_1 = require("./classes/address");
const mail_1 = require("./classes/mail");
const phone_1 = require("./classes/phone");

function buildAgenda() {
    let agenda = [];
    const addressPerson0 = new address_1.Address('Calle Francisco Salinas', 1, 4, 'B', 13360, 'Callosa de Segura', 'Alicante');
    const person0= new person_1.Person('Maria', 'Andreu', 28, '12345678D', new Date(1995, 1, 10), 'Azul', 'Mujer', [addressPerson0], [new mail_1.Mail('Personal', 'mariaandreu@gmail.com')], [new phone_1.Phone('Personal', 612345678)], 'Dependienta');
    const addressPerson1 = new address_1.Address('Avenida Libertad', 19, 6, 'E', 18852, 'Madrid', 'Madrid');
    const person1 = new person_1.Person('Sara', 'Martinez', 27, '32165985P', new Date(1996, 10, 13), 'Rojo', 'Mujer', [addressPerson1], [new mail_1.Mail('Trabajo', 'saramartinez@hermanosmartinez.com')], [new phone_1.Phone('Trabajo', 698532145)], 'Contable');
    const addressPerson2 = new address_1.Address('Calle castillo', 19, 12, '3', 18964, 'Elda', 'Alicante');
    const person2 = new person_1.Person('Pepe', 'Antón', 28, '14785236D', new Date(1995, 1, 12), 'Verde', 'Hombre', [addressPerson2], [new mail_1.Mail('Personal', 'pepeanton@gmail.com')], [new phone_1.Phone('Personal', 645896321)], 'Administrativo');
    agenda.push(person0);
    agenda.push(person1);
    agenda.push(person2);
    return agenda;
}
function showAgenda(agenda) {
    for (const person of agenda) {
        console.log(person.showPersonInfo());
    }
}
function addNewPersonData(dniNumber, newAddress, newMail, newPhone) {
    for (const person of agenda) {
        if (person.dni === dniNumber) {
            person.addAddress(newAddress);
            person.addMail(newMail);
            person.addPhone(newPhone);
        }
    }
}
function changePersonData(dniNumber, newAddress, newMail, newPhone) {
    for (const person of agenda) {
        if (person.dni === dniNumber) {
            person.setAddress(newAddress);
            person.setMail(newMail);
            person.setPhone(newPhone);
        }
    }
}

let agenda = buildAgenda();

showAgenda(agenda);

const dniPerson1 = '32165985P';
const newAddressPerson1 = new address_1.Address('Calle Maria', 17, 32, '3', 18964, 'Elda', 'Alicante');
const newMailPerson1 = new mail_1.Mail('Personal', 'saramartinez@gmail.com');
const newPhonePerson1 = new phone_1.Phone('Personal', 632145698);

const dniPerson2 = '14785236D';
const changeAddressPerson2 = new address_1.Address('Calle de la Carcel', 22, 14, 'A', 03361, 'Cox', 'Alicante');
const changeMailPerson2 = new mail_1.Mail('Trabajo', 'pepeanton@hermanosgilabert.com');
const changePhonePerson2 = new phone_1.Phone('Trabajo', 678596325);

addNewPersonData(dniPerson1, newAddressPerson1, newMailPerson1, newPhonePerson1);
changePersonData(dniPerson2, changeAddressPerson2, changeMailPerson2, changePhonePerson2);

showAgenda(agenda);