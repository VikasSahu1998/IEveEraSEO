import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,) { }

  postContantUsForm(data: any) {
    return this.http.post<any>("https://ieveera-bc8b3-default-rtdb.firebaseio.com/ContantUsForm.json/", data);
  }
}
