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
       <div id="service_types" class="legend">
         <div style="font-weight: bold; float: left; padding: 3px;"> Service Types: </div> 
         <div class="square" style="background: Green;"></div>
         <div class="legend-text"> Benefits Verification </div>
         <div class="square" style="background-color: Yellow;"></div>
         <div class="legend-text"> Prior Authorization </div>         
         <div class="square" style="background-color: Purple;"></div>
         <div class="legend-text"> CoPay </div>         
         <div class="square" style="background-color: aquamarine;"></div>
         <div class="legend-text"> PAP </div>         
         <div class="square" style="background-color: Teal;"></div>
         <div class="legend-text"> Prescription Referral </div>         
       </div>
       <br>
       <div id="status_keys" class="legend">
       <div style="font-weight: bold; float: left; padding: 3px;">Status Key </div> 
        <div>
         <img  src="/app/images/completed.png" style="padding: 3px; width:40px; height:40px;">Completed          
         <img  src="/app/images/progress.png" style="padding: 3px; width:35px; height:35px;">In Progress          
         <img  src="/app/images/action.png" style="padding: 3px; width:40px; height:35px;">Action Needed   
        </div>
       </div>  
       <br>     
       <a href="./patientpage.html" style="width: 100%" id="patient_list" class="collapse in">
       <ul class="patient-list" style="list-style-type:none"> 
         <ng-container *ngFor="let patient of data">
          <li class="patient-details" (click)="onSelect(patient)" [class.selected]="patient === selectedPatient">
            <div class="block">
              <div *ngIf="(patient.statusKey == 'ActionNeeded')">
                <img src='/app/images/action.png'  style="padding: 3px; width:40px; height:35px;">
              </div>
              <div *ngIf="(patient.statusKey == 'InProgress')">            
               <img src='/app/images/progress.png' style="padding: 3px; width:40px; height:35px;">
              </div>
              <div *ngIf="(patient.statusKey == 'Completed')" >                        
               <img src='/app/images/completed.png' style="padding: 3px; width:40px; height:35px;">
              </div>
             </div>  
             <div class="block"><a href="./patientpage.html"> {{ patient.name }}</a></div>
             <div class="block"> Patient ID: {{ patient.patientID }}  </div>
             <div class="block">  Date of Birth: {{ patient.dob }} </div>
             <div class="block"> Service ID: {{ patient.serviceID }}</div>
             <div class="block">
             <div *ngIf="(patient.service == 'BV')">
               <img src='/app/images/bv.png' class="service_img">
             </div>
             <div *ngIf="(patient.service == 'PA')">            
              <img src='/app/images/pa.png' class="service_img">
             </div>
             <div *ngIf="(patient.service == 'CoPay')" >                        
              <img src='/app/images/copay.png' class="service_img">
             </div>
             <div *ngIf="(patient.service == 'PAP')" >                        
             <img src='/app/images/pap.png' class="service_img">
            </div>
            <div *ngIf="(patient.service == 'PR')" >                        
            <img src='/app/images/pr.png' class="service_img">
           </div>
            </div> 
         </li>
       </ng-container>
     </ul>  
    </a>
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
  overflow: hidden;  
  width: 100%;
  background: #eeeeee;
  color: Black;
  border-radius: 4px
  margin: 0 auto;
 }
 #status_keys{
   width: 60%;   
   margin: 0 auto;
 }
 #service_type{
  margin: 0 auto;
 }
 .square{
  width: 50px;
   height: 25px; 
   padding: 3px; 
   float: left;
 }
 .legend-text{
   float: left;
   padding: 3px;
 }
  ul {
    list-style-type: square;
  }
   .patient-details  {
    overflow: hidden;      
    display:inline-block;
    text-align:center;
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
  padding: 3px;
  display:inline-block;
  text-align:center;

}
.service_img {
  padding: 6px; 
  width:140px; 
  height:38px;
}
 `]
})
export class AppComponent {
  private apiUrl = 'http://www.mocky.io/v2/590212490f00006b18d2cb05';
  data: any = {}; // holds the imported data

  constructor(private http: Http) {
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

const imageSource: string = "/app/images/action.png";