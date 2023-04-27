import { Person } from './Clases/person';
import { Address } from './Clases/address';
import { Mail } from './Clases/mail';
import { Phone } from './Clases/phone';

function buildAgenda(): Array<Person> 
    {
        let agenda: Array<Person> = [];

        const addressPerson0: Address = new Address('Calle Francisco Salinas', 1, 4, 'B', 13360, 'Callosa de Segura', 'Alicante');
        const person0: Person = new Person('Maria', 'Andreu', 28, '12345678D', new Date(1995, 1, 10), 'Azul', 'Mujer', [addressPerson0], [new Mail('Personal', 'mariaandreu@gmail.com')], [new Phone('Personal', 612345678)], 'Dependienta');
        
        const addressPerson1: Address = new Address('Avenida Libertad', 19, 6, 'E', 18852, 'Madrid', 'Madrid');
        const person1: Person = new Person( 'Sara', 'Martinez', 27, '32165985P', new Date(1996, 10, 13), 'Rojo', 'Mujer', [addressPerson1], [new Mail('Trabajo', 'saramartinez@hermanosmartinez.com')], [new Phone('Trabajo', 698532145)], 'Contable');
    
        const addressPerson2: Address = new Address('Calle castillo', 19, 12, '3', 18964, 'Elda', 'Alicante');
        const person2: Person = new Person('Pepe', 'Anton', 28, '14785236D', new Date(1995, 1, 12), 'Verde', 'Hombre', [addressPerson2], [new Mail('Personal', 'pepeanton@gmail.com')], [new Phone('Personal', 645896321)], 'Administrativo');
        
        agenda.push(person0);
        agenda.push(person1);
        agenda.push(person2);

        return agenda;
    }
function showAgenda(agenda: Array<Person>): void 
    {
        for (const person of agenda) {
            console.log(person.showPersonInfo());
        }
    }
function addNewPersonData(
    dniNumber: string,
    newAddress: Address,
    newMail: Mail,
    newPhone: Phone): void 
    {
        for (const person of agenda) {
            if (person.dni === dniNumber) {
                person.addAddress(newAddress);
                person.addMail(newMail);
                person.addPhone(newPhone);
            }
        }
    }
function changePersonData(
    dniNumber: string,
    newAddress: Address,
    newMail: Mail,
    newPhone: Phone): void 
    {
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

const dniPerson1: string = '32165985P';
const newAddressPerson1: Address = new Address('Avenida Luchadores', 13, 4, 'A', 18852, 'Madrid', 'Madrid');
const newMailPerson1: Mail = new Mail('Personal', 'saramartinezmartinez@gmail.com');
const newPhonePerson1: Phone = new Phone('Personal', 656536258);

const dniPerson2: string = '14785236D';
const changeAddressPerson2: Address = new Address('Calle Callosa', 3, 2, 'B', 19854, 'Elche', 'Alicante');
const changeMailPerson2: Mail = new Mail('Trabajo', 'antonpepe@gmail.com');
const changePhonePerson2: Phone = new Phone('Trabajo', 632145236);

addNewPersonData(dniPerson1, newAddressPerson1, newMailPerson1, newPhonePerson1);
changePersonData(dniPerson2, changeAddressPerson2, changeMailPerson2, changePhonePerson2);
showAgenda(agenda);