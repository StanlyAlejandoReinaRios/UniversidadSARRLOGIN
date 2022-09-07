import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversidadsarrApiService } from 'src/app/universidadsarr-api.service';
import { HomeComponent } from 'src/app/home/home.component';
@Component({
  selector: 'app-read-universidadsarr',
  templateUrl: './read-universidadsarr.component.html',
  styleUrls: ['./read-universidadsarr.component.css']
})
export class ReadUniversidadsarrComponent implements OnInit {
  universidadsarrList$!: Observable<any[]>;
  universidadsarrTypesList$! : Observable<any[]>;
  universidadsarrTypesList : any=[];
  universidadsarrTypesMap:Map<Number, string> = new Map()
  
  constructor(private service:UniversidadsarrApiService) { }
  ngOnInit(): void {
    this.universidadsarrList$ = this.service.getUniversidadsarrList();
    this.universidadsarrTypesList$ = this.service.getUniversidadsarrTypesList();
    this.refreshUniversidadTypesMap();
  }
  modalTitle:string = '';
  activateCreateEditUniversidadsarrComponent:boolean = false;
  universidadsarr:any;

  modalAdd(){
    this.universidadsarr = {
      id:0,
      nombre:null,
      telefono:null,
      correo:null,
      tipoUsuarioId:null
    }
    this.modalTitle = "Añadir Usuario";
    this.activateCreateEditUniversidadsarrComponent = true;
  }
  modalEdit(item:any){
      this.universidadsarr = item;
      this.modalTitle = "Editar Usuario ";
      this.activateCreateEditUniversidadsarrComponent = true;
  }
  delete(item:any){
    if(confirm(`Esta Seguro De Eliminar Al Usuario ${item.nombre}` )){
      this.service.deleteUniversidadsarr(item.id).subscribe(res=>{
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showDeleteSuccess = document.getElementById('Delete-success-alert');
      if(showDeleteSuccess){
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.universidadsarrList$ = this.service.getUniversidadsarrList();
      })
    }
  }
  modalClose(){
    this.activateCreateEditUniversidadsarrComponent = false;
    this.universidadsarrList$ = this.service.getUniversidadsarrList();
  }

  refreshUniversidadTypesMap(){
    this.service.getUniversidadsarrTypesList().subscribe(data=>{
      this.universidadsarrTypesList = data;

      for(let i=0; i < data.length; i++){
        this.universidadsarrTypesMap.set(this.universidadsarrTypesList[i].id, this.universidadsarrTypesList[i].
          nombre);
      }
    })
  }
}
