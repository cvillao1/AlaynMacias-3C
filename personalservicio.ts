import { Empleadito } from "./empleado";
export class PersonalDeServicio extends Empleadito {
  private _seccion: string;
    static cambiarSeccion: any;

  constructor(
    nombre: string,
    apellido: string,
    numeroidentificacion: number,
    estadoCivil: string,
    anioIncorporacion: number,
    despacho: number,
    seccion: string
  ) {
    super(nombre, apellido, numeroidentificacion, estadoCivil, anioIncorporacion, despacho);
    this._seccion = seccion;
  }

  public get seccion(): string {
    return this._seccion;
  }

  public cambiarSeccion(seccion: string) {
    this._seccion = seccion;
  }

  toString(): string {
    return `La persona de serivicio de nombre y apellido: ${this.nombre} ${this.apellido} 
    con cédula de identidad: ${this.numeroidentificacion} esta ubicado en la seccion:  ${this.seccion}`;
  }
}