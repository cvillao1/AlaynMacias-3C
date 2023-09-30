import { Personita } from "./persona";
export class Estudiantito extends Personita{
    public curso: string;
    constructor(nombre:string, apellidos:string, numeroidentificacion:number, 
        estadoCivil:string, curso:string){
        super(nombre, apellidos, numeroidentificacion, estadoCivil);
        this.curso=curso; 
    }
    public CambiarEstadoCivil(){}
    public MatriculacionNuevoCurso(nuevoCurso: string){
        this.curso= nuevoCurso; 
    }
    toString(): string {
        return `El estudiante de nombre y apellido: ${this.nombre} ${this.apellido} 
        con cédula de identidad:  ${this.numeroidentificacion} actualmente matriculado en el curso:  ${this.curso}`;
      }
}
