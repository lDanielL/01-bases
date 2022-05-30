import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {


  heroes:string[] =['Mondongo','Alejo','El bananero','Harry el sucio potter'];
  heroeBorrado:string ='';

  borrarHeroe(){
    this.heroeBorrado=this.heroes.shift()||'';
  
  }
}


