import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
   
    <h1>{{titulo}}</h1>
    <h3>la base es: <b>{{base}}</b></h3>
    <button (click)="acumular(-1)">-{{base}}</button>
    <span> {{numero}} </span>
    <button (click)="acumular(+1)">+{{base}}</button>
    
    `
})
export class ContadorComponent {
   
    public titulo:string = 'Contador app';
    numero:number = 0;
    base:number = 5;
  
    acumular(valor:number){
      this.numero+=(this.base*valor);
    }

}