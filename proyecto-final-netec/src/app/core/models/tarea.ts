export class Tarea {
    key?: string | null;
    desTarea?: string;
    encargado?: string;
    categoria?: string;
    fechaIni?: Date;
    fechaFin?: Date;
    estado?: string;
}

export interface Estado {
    name: string;
    code: string;
}

export interface Categoria {
    nameCat: string;
    codeCat: string;
}