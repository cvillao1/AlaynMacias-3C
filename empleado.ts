import { Personita } from "./persona";
export class Empleadito extends Personita {
  private _anioIncorporacion: number;
  private _despacho: number;

  constructor(nombre: string, apellido: string, numeroidentificacion: number, estadoCivil: string, anioIncorporacion: number, despacho: number) {
    super(nombre, apellido, numeroidentificacion, estadoCivil);
    this._anioIncorporacion = anioIncorporacion;
    this._despacho = despacho;
  }

  public get despacho(): number {
    return this._despacho;
  }

  public cambiarDespacho(despacho: number) {
    this._despacho = despacho;
  }

  public get anioIncorporacion(): number {
    return this._anioIncorporacion;
  }

  toString(): string {
    return `El empleado ${this.nombre} ${this.apellido} con numero de identidad: ${this.numeroidentificacion} 
    Se encuentra ubicao en el despacho: ${this.despacho}`;
  }
}