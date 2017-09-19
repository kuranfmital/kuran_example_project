import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'my-app',
//templateUrl: '/app.component.html',
 // styleUrls: ['./app.component.css']
  template: `
  <div class="section"> Completed Cases over the past 7 days
  <button type="button" class="collapse-button" data-toggle="collapse" data-target="#completed_cases">_</button> 
  <hr>  
  <div id="completed_cases">Insert completed cases here</div>
  <br>  
  </div>
  <div class="section">Current Cases  
    <button ng-click="toggle = !toggle" type="button" class="collapse-button" data-toggle="collapse" data-target="#patient_section">_</button>      
    <hr>
     <div id="patient_section" class="section">Filter Options
      <button type="button" class="collapse-button" data-toggle="collapse" data-target="#filter_options">+</button>  
      <hr>
      <div id="filter_options" class="collapse"> Filter Options Here
      <br>
     </div>
     <div id="service_types" class="legend">Service Types:
     </div>
     <br>
     <div id="status_keys" class="legend">Status Key </div>     
     <br>     
     <div id="patient_list" class="collapse in">
      <ul class="patient-list" style="list-style-type:none"> 
       <ng-container *ngFor="let patient of data">
        <li class="patient-details" (click)="onSelect(patient)" [class.selected]="patient === selectedPatient">
            <div class="block"> {{ patient.statusKey }}</div>          
            <div class="block"><a href="./patientpage.html"> {{ patient.name }}</a></div>
            <div class="block"> Patient ID: {{ patient.patientID }}  </div>
            <div class="block">  Date of Birth: {{ patient.dob }} </div>
            <div class="block"> Service ID: {{ patient.serviceID }}</div>
            <div class="block"> {{ patient.service }}</div>
        </li>
      </ng-container>
    </ul>  
    </div>
</div>`,
 styles: [`
 .section {
   border: 1px;
   width: 85%;
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
 .legend {
   width: 100%;
   background-color:#eeeeee;
   color: Black;
   padding: 3px;
   border-radius: 4px;
   margin: 0 auto;
   font-style: bold;
 }
 #status_keys{
   width: 50%;
 }
  ul {
    list-style-type: square;
  }
   .patient-details  {
    display: inline-block;
    width: 88%;
    background-color: #eeeeee;
    color: Black;
    border-radius: 4px
    margin: 0 auto;
   }  
   .patient-details:hover  {
    background-color: #ffffff;
   }  
.block{
  float: left;
  padding: 3px;
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

/*var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);*/