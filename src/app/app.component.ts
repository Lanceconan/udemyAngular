import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean = true;
  texto:boolean = true;
  cursos:string[] = ['HTML', 'ANGULAR', 'PHP'];
  paises:string[] = ['CHILE','ARGENTINA','PERU','BRASIL','VENEZUELA'];
  generos:string[] = ['HOMBRE','MUJER','OTRO'];
  estilos:string[] = ['LEER','ESCRIBIR','SUMAR','RESTAR'];

  public test:any = { limite_semana: false };

  animales:Array<any> = [
    {tipo : 'Perro', nombre: 'Tambito', edad: 13},
    {tipo : 'Gato', nombre : 'Grenda Pelito', edad : 8},
    {tipo : 'Hamster', nombre : 'Pikachu', edad : 5}
  ];

}
