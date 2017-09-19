import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'my-app',
//templateUrl: '/app.component.html',
 // styleUrls: ['./app.component.css']
  template: `
  <div class="section">Filter Options
  <button type="button" class="collapse-button" data-toggle="collapse" data-target="#demo">_</button>  
  <hr>
  <div id="demo" class="collapse in">
  <ul style="list-style-type:none"> 
    <ng-container *ngFor="let patient of data">
       <li class="patient-details"> 
          <div class="block"><a href="./patientpage.html"> {{ patient.name }}</a></div>
          <div class="block"> Patient ID: {{ patient.patientID }} </div>
          <div class="block">  Date of Birth: {{ patient.dob }} </div>
          <div class="block"> Service ID: {{ patient.serviceID }}</div>
          <div class="block"> {{ patient.statusKey }}</div>    
          <div class="block"> {{ patient.service }}</div>
       </li>
    </ng-container>
  </ul>  
  </div>
</div>`,
 styles: [`
 .section {
   border: 1px;
   width: 75%;
   margin: 0 auto;

 }
  .collapse-button {'
    overflow: hidden;
    color: Black;
    background-color: Transparent;
    border: none;
    width: 20px;
    float: right;
    padding: 3px;
    border-radius: 3px;
 }
  ul {
    list-style-type: square;
  }
   .patient-details {
    border: 2px solid black;
    display: inline-block;
    width: 100%;
    margin: 0 auto;
   }  
.block{
  width: 100px;
  float: left;
}
 `]
})
export class AppComponent  { 
  private apiUrl = 'http://www.mocky.io/v2/590212490f00006b18d2cb05';
  data: any = {}; // holds the imported data

  constructor (private http: Http) {
    console.log('Hello fellow user')
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
}