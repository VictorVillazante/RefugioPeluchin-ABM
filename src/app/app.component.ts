import { Component } from '@angular/core';
import {Mascota} from './modelos/mascota';
//import { from } from 'rxjs';
import{Sexo} from './modelos/sexo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-refugio';
  mascotaArray: Mascota[]=[
    {id:1,nombre:"Mora",sexo:"Hembra",raza:"Yorkie",edad:3},
    {id:2,nombre:"Bethoveen",sexo:"Macho",raza:"San Bernardo",edad:5},
    {id:3,nombre:"Wayra",sexo:"Hembra",raza:"Labrador",edad:6},

  ];
  sexoArray: Sexo[]=[
    {id:1,sexo:"Macho"},
    {id:2,sexo:"Hembra"},

  ];
  selectedMascota: Mascota = new Mascota();
  addOrEdit(){
    if(this.selectedMascota.id==0){
      this.selectedMascota.id=this.mascotaArray.length+1;
      this.mascotaArray.push(this.selectedMascota);
    }
    this.selectedMascota = new Mascota();
   
  }
  registrarpet(){
    this.editar=false;
    this.selectedMascota = new Mascota();
  }
  editar:boolean=false;
  editPet(mascota:Mascota){
    this.editar=true;
    console.log("edit pet");
    this.openForEdit(mascota);
  }
  openForEdit(mascota: Mascota){
    this.selectedMascota=mascota;
    console.log(this.selectedMascota)
  }
  RowSelected(mascota: Mascota){
    this.selectedMascota=mascota;
  }
  deletePet(selectedMascota: Mascota){
    if(confirm('Está seguro que desea eliminar a la mascota?')){
      this.mascotaArray=this.mascotaArray.filter(x=> x!=selectedMascota);
    }

  }
  cargandoImagen(event){
    console.log(event);
  }
}
