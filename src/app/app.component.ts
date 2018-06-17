import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = {};
  item ={
    title: 'Rahul',
    body: 'Rahul',
    userId: 444

  };

  constructor(private dataservices: FetchDataService) { }

  showData() {
    this.dataservices.getdata().subscribe(data => {
      this.data = data;
    })

  }

  setData(){
    this.dataservices.postData(this.item).subscribe(response => console.log(response));
    this.data ={}
  }
}
