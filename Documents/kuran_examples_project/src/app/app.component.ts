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
  filter_check = ['Completed', 'InProgress', 'ActionNeeded', 'BV', 'PA', 'CoPay', 'PAP', 'PR']; // holds the values of filter checkboxes
  toggle1 = false;  

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

  getCount(data, service: string) {
    var count = 0;
    var a;
    for (a = 0; a < data.length; a++) {
      if (data[a].service == service && data[a].statusKey == 'Completed') {
        count = count + 1;
      }
    }
    return count
  } // Counts the number of a completed 'service' in 'data' 


  checkFilters(service, status, filter) {
  filter = this.updateList(filter)
    if (filter.indexOf(service) != -1 && filter.indexOf(status) != -1) {
      return true;
    } else {
      return false;
    }
  }

  updateList(filter){
    var name = ['ch_completed', 'ch_progress', 'ch_action', 'ch_bv', 'ch_pa', 'ch_copay', 'ch_pap', 'ch_pr'];
    var a;
    for (a = 0; a < filter.length; a++) {
      if (document.getElementById(name[a]).checked) {
        filter[a] = document.getElementById(name[a]).value;
      } else {
        filter[a] = "not" + document.getElementById(name[a]).value
      }
    } 
    this.filter_check = filter
    return filter
    }
}