import { Empleadito } from "./empleado";
import { Estudiantito } from "./estudiante";
import { Personita } from "./persona";
import { PersonalDeServicio } from "./personalservicio";
import { Profesorito } from "./profesor";

const persona = new Personita("Alayn", "Macias", 120310230, "Soltero");
const estudiante = new Estudiantito("Euclides", "Alcivar", 2323232332, "Solterito", "2do");
const empleado = new Empleadito("Geradl", "Yuted", 1319239293, "Soltero", 2000, 69);
const profesor = new Profesorito("Mike", "Machuca", 2939239293,"Casado", 2019, 25, "Informatica");
const personalDeServicio1 = new PersonalDeServicio("Panchita", "Perez", 782282822,"Casada", 2015, 40, "Limpieza");

console.log(persona.toString());
persona.cambiarEstadoCivil("casado")
console.log(persona.toString());
persona.cambiarEstadoCivil("divorciado")
console.log(persona.toString());
persona.cambiarEstadoCivil("casado")
console.log(persona.toString());
persona.cambiarEstadoCivil("viudo")
console.log(persona.toString());
persona.cambiarEstadoCivil("unión libre")
console.log(persona.toString());

console.log(estudiante);
console.log(empleado);
console.log(profesor);
console.log(PersonalDeServicio);
