import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()

export class DbzService {
  
    private _personajes:Personaje[] = [
        {
          nombre:'Cokun',
          poder:15000
        },
        {
          nombre:'Vrocheta',
          poder:8000
        }
    ]

    get personajes():Personaje[]{
        return [...this._personajes];
    }
    
    constructor(){
    }

    agregarPersonaje(personaje:Personaje){

        this._personajes.push(personaje);
    }

  }