import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntidadesService {

  constructor(private http: HttpClient) { }
  getEntidad(): Observable<any> {
    return this.http.get("https://reqres.in/api/users/");
    
  }

}
