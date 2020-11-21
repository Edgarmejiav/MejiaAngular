import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JsonService {
  baseurl = 'https://jsonplaceholder.typicode.com/posts';
  paisurl = 'https://restcountries.eu/rest/v2/all';
  peruurl="https://restcountries.eu/rest/v2/name/peru?fullText=true"
  constructor(private http: HttpClient) {
    console.log('listo app');
  }
  getjson() {
    const headers = new HttpHeaders({
      "content-type": "application/json"
      
    });
    return this.http.get(this.baseurl, { headers });
  }
  getpais() {
    return this.http.get(this.paisurl);
  }
  getperu() {
    return this.http.get(this.peruurl);
  }
}
