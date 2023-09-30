export class Personita{ 
     nombre: string;
     apellido: string;
     numeroidentificacion: number;
     estadoCivil: string;
  
    constructor(nombre: string, apellido: string, numeroidentificacion: number, estadoCivil: string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.numeroidentificacion = numeroidentificacion;
      this.estadoCivil = estadoCivil;
    }
  
    public getnombre(): string {
      return this.nombre;
    }
  
    public getapellido(): string {
      return this.apellido;
    }
    public getnumeroidentificacion(): number {
      return this.numeroidentificacion;
    }
  
    public getestadoCivil(): string {
      return this.estadoCivil;
    }
  
    public cambiarEstadoCivil(nuevoestadoCivil: string) {
      this.estadoCivil = nuevoestadoCivil;
    }
  
  
    toString() {
      return `Nombre y Apellido: ${this.nombre} ${this.apellido} 
      numero de cédula ${this.numeroidentificacion} EstadoCivil: ${this.estadoCivil}`;
    }
}