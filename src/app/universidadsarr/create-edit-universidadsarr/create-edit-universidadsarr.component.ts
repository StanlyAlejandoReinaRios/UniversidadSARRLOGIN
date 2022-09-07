// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-create-edit-universidadsarr',
//   templateUrl: './create-edit-universidadsarr.component.html',
//   styleUrls: ['./create-edit-universidadsarr.component.css']
// })
// export class CreateEditUniversidadsarrComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversidadsarrApiService } from 'src/app/universidadsarr-api.service';

//Aqui Agregamos los campos a utilizar y los metodos correspondientes a utilizar
@Component({
  selector: 'app-create-edit-universidadsarr',
  templateUrl: './create-edit-universidadsarr.component.html',
  styleUrls: ['./create-edit-universidadsarr.component.css']
})
export class CreateEditUniversidadsarrComponent implements OnInit {

  universidadsarrList$!:Observable<any[]>;
  universidadsarrTypesList$! : Observable<any[]>;

  constructor(private service:UniversidadsarrApiService) { }

  @Input() universidadsarr:any;
  id:number = 0;
  nombre: string = "";
  correo: string = "";
  telefono:number = 0;
  tipoUsuarioId! :number;


  ngOnInit(): void {
    this.id = this.universidadsarr.id;
    this.nombre = this.universidadsarr.nombre;
    this.correo = this.universidadsarr.correo;
    this.telefono = this.universidadsarr.telefono;
    this.tipoUsuarioId = this.universidadsarr.tipoUsuarioId;
    this.universidadsarrList$ = this.service.getUniversidadsarrList();
    this.universidadsarrTypesList$ = this.service.getUniversidadsarrTypesList();
  }

  addUsuario(){
    var universidadsarr = {
      id:this.id,
      nombre:this.nombre,
      correo:this.correo,
      telefono:this.telefono,
      tipoUsuarioId:this.tipoUsuarioId,
    }
    this.service.addUniversidadsarr(universidadsarr).subscribe(res=>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');

      if(showAddSuccess){
        showAddSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

  updateUsuario(){
    var universidadsarr = {
      id:this.id,
      nombre:this.nombre,
      correo:this.correo,
      telefono : this.telefono,
      tipoUsuarioId:this.tipoUsuarioId,
    }
    var id:number = this.id;
    this.service.updateUniversidadsarr(id,universidadsarr).subscribe(res=>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');

      if(showUpdateSuccess){
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

}

