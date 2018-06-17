import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
})
export class FetchDataService {
  dataUrl = "assets/http.json";
  remoteUrl = "https://jsonplaceholder.typicode.com/posts";
  txtfile = "assets/text.txt";



  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json"

    })
  };

  constructor(private http: HttpClient) { }

  getdata(){
    return this.http.get(this.remoteUrl);
  }

  postData(item){
    return this.http.post(this.remoteUrl, item, this.httpOptions);
  }
}
