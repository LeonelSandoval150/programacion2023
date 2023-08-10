import { Component, OnInit } from '@angular/core';
//importamos nuestra interfaz
import { Perro } from 'src/app/models/perro';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //propiedad publica (tipo array)

  public info:Perro[];


  //INICIAMOS LA PROPIEDAD INFO
  constructor(){
  this.info=[
    {
      id:"",
      nombre:"mati",
      descripcion:"es un perro muy buena onjda que le gustan las croquetas de perros y los paseos largos",
      imagen:"https://fotografias.antena3.com/clipping/cmsimages01/2022/08/12/F30768A2-C006-4CF1-8701-6026559DB725/mas-4000-perros-utilizados-experimentos-cientificos-buscan-hogar-adopcion_103.jpg?crop=1700,1275,x0,y0&width=1200&height=900&optimize=low&format=webply",
      alt:"",
      raza:"nose",
      edad:"3 años"

    },
    {
      id:"",
      nombre:"Guille",
      descripcion:"se las manda , le gustan tambien las croqueteas",
      imagen:"https://mivet.com/hubfs/Canva%20images/Dise%C3%B1o%20sin%20t%C3%ADtulo-Sep-09-2022-12-04-40-49-PM.png",
      alt:"",
      raza:"nose",
      edad:"5 años"

    }
  ]
  }
//evento de construccion/ inicializacion
 ngOnInit():void{

 }
}
