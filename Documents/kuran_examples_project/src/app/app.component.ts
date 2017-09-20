import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  private apiUrl = 'http://www.mocky.io/v2/590212490f00006b18d2cb05';
  data: any = {}; // holds the imported data
  count: number = 0;

  constructor(private http: Http) {
    console.log('Hello user')
    this.getPatients();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getPatients() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  getCount(data,service:string) {
    var count = 0;    
    var a;
    for(a = 0; a < data.length; a++) {
      if(data[a].service == service && data[a].statusKey == 'Completed'){
        count = count + 1;
      }
    }
   return count
   } // Counts the number of a completed 'service' in 'data' 

   filterSearch(params:Array){
// params
   }
}


