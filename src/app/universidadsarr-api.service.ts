// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UniversidadsarrApiService {

//   constructor() { }
// }


//#5
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//LOS SERVICIOS API QUE VAMOS A UTILIZAR
export class UniversidadsarrApiService {
  readonly UniversidadarrAPIUrl = "https://localhost:7196/api"
  constructor(private http:HttpClient) { }
  getUniversidadsarrList():Observable<any[]>{
    return this.http.get<any>(this.UniversidadarrAPIUrl + '/UniversidadSARR');
  }
  addUniversidadsarr(data:any) {
    return this.http.post(this.UniversidadarrAPIUrl + '/UniversidadSARR', data);
  }
  updateUniversidadsarr(id:number|string, data:any){
    return this.http.put(this.UniversidadarrAPIUrl + `/UniversidadSARR/${id}`, data);
  }
  deleteUniversidadsarr(id:number|string){
    return this.http.delete(this.UniversidadarrAPIUrl + `/UniversidadSARR/${id}`);
  }
  getUniversidadsarrTypesList():Observable<any[]>{
    return this.http.get<any>(this.UniversidadarrAPIUrl + '/TipoUsuario');
  }
  // addUniversidadsarrTypes(data:any) {
  //   return this.http.post(this.UniversidadarrAPIUrl + '/TipoUsuario', data);
  // }
  // UpdateUniversidadsarrTypes(id:number|string, data:any){
  //   return this.http.put(this.UniversidadarrAPIUrl + `/TipoUsuario/${id}`, data);
  // }
  // deleteUniversidadsarrInpectionTypes(id:number|string){
  //   return this.http.delete(this.UniversidadarrAPIUrl + `/TipoUsuario/${id}`);
  // }

}





