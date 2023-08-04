import { Component, OnInit } from '@angular/core';
//importamos nuestra interfaz
import { TarjetasInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //propiedad publica (tipo array)
  public info:TarjetasInicio[];

  //INICIAMOS LA PROPIEDAD INFO
  constructor(){
    this.info=[
    {
      titulo:"tarjeta 1",
      descripcion:"Foto de un leon ",
      imagen:"https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      alt:"Leon"

    }
  ]
  }
//evento de construccion/ inicializacion
 ngOnInit():void{

 }
}
