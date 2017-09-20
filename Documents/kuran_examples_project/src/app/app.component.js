"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.apiUrl = 'http://www.mocky.io/v2/590212490f00006b18d2cb05';
        this.data = {}; // holds the imported data
        console.log('Hello fellow user');
        this.getPatients();
        this.getData();
    }
    AppComponent.prototype.getData = function () {
        return this.http.get(this.apiUrl)
            .map(function (res) { return res.json(); });
    };
    AppComponent.prototype.getPatients = function () {
        var _this = this;
        this.getData().subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //templateUrl: '/app.component.html',
        // styleUrls: ['./app.component.css']
        template: "  \n  <div class=\"section\"> Completed Cases over the past 7 days\n   <button type=\"button\" class=\"collapse-button\" data-toggle=\"collapse\" data-target=\"#completed_cases\">_</button> \n   <hr>  \n   <div id=\"completed_cases\">Insert completed cases here</div>\n    <br>  \n   </div>\n   <div class=\"section\">Current Cases  \n    <button ng-click=\"toggle = !toggle\" type=\"button\" class=\"collapse-button\" data-toggle=\"collapse\" data-target=\"#patient_section\">_</button>      \n    <hr>\n    <div id=\"patient_section\" class=\"section\">Filter Options\n      <button type=\"button\" class=\"collapse-button\" data-toggle=\"collapse\" data-target=\"#filter_options\">+</button>  \n      <hr>\n       <div id=\"filter_options\" class=\"collapse\"> Filter Options Here\n       <br>\n       </div>\n       <div id=\"service_types\" class=\"legend\">\n         <div style=\"font-weight: bold; float: left; padding: 3px;\"> Service Types: </div> \n         <div class=\"square\" style=\"background: Green;\"></div>\n         <div class=\"legend-text\"> Benefits Verification </div>\n         <div class=\"square\" style=\"background-color: Yellow;\"></div>\n         <div class=\"legend-text\"> Prior Authorization </div>         \n         <div class=\"square\" style=\"background-color: Purple;\"></div>\n         <div class=\"legend-text\"> CoPay </div>         \n         <div class=\"square\" style=\"background-color: aquamarine;\"></div>\n         <div class=\"legend-text\"> PAP </div>         \n         <div class=\"square\" style=\"background-color: Teal;\"></div>\n         <div class=\"legend-text\"> Prescription Referral </div>         \n       </div>\n       <br>\n       <div id=\"status_keys\" class=\"legend\">\n       <div style=\"font-weight: bold; float: left; padding: 3px;\">Status Key </div> \n        <div>\n         <img  src=\"/app/images/completed.png\" style=\"padding: 3px; width:40px; height:40px;\">Completed          \n         <img  src=\"/app/images/progress.png\" style=\"padding: 3px; width:35px; height:35px;\">In Progress          \n         <img  src=\"/app/images/action.png\" style=\"padding: 3px; width:40px; height:35px;\">Action Needed   \n        </div>\n       </div>  \n       <br>     \n       <a href=\"./patientpage.html\" style=\"width: 100%\" id=\"patient_list\" class=\"collapse in\">\n       <ul class=\"patient-list\" style=\"list-style-type:none\"> \n         <ng-container *ngFor=\"let patient of data\">\n          <li class=\"patient-details\" (click)=\"onSelect(patient)\" [class.selected]=\"patient === selectedPatient\">\n            <div class=\"block\">\n              <div *ngIf=\"(patient.statusKey == 'ActionNeeded')\">\n                <img src='/app/images/action.png'  style=\"padding: 3px; width:40px; height:35px;\">\n              </div>\n              <div *ngIf=\"(patient.statusKey == 'InProgress')\">            \n               <img src='/app/images/progress.png' style=\"padding: 3px; width:40px; height:35px;\">\n              </div>\n              <div *ngIf=\"(patient.statusKey == 'Completed')\" >                        \n               <img src='/app/images/completed.png' style=\"padding: 3px; width:40px; height:35px;\">\n              </div>\n             </div>  \n             <div class=\"block\"><a href=\"./patientpage.html\"> {{ patient.name }}</a></div>\n             <div class=\"block\"> Patient ID: {{ patient.patientID }}  </div>\n             <div class=\"block\">  Date of Birth: {{ patient.dob }} </div>\n             <div class=\"block\"> Service ID: {{ patient.serviceID }}</div>\n             <div class=\"block\">\n             <div *ngIf=\"(patient.service == 'BV')\">\n               <img src='/app/images/bv.png' class=\"service_img\">\n             </div>\n             <div *ngIf=\"(patient.service == 'PA')\">            \n              <img src='/app/images/pa.png' class=\"service_img\">\n             </div>\n             <div *ngIf=\"(patient.service == 'CoPay')\" >                        \n              <img src='/app/images/copay.png' class=\"service_img\">\n             </div>\n             <div *ngIf=\"(patient.service == 'PAP')\" >                        \n             <img src='/app/images/pap.png' class=\"service_img\">\n            </div>\n            <div *ngIf=\"(patient.service == 'PR')\" >                        \n            <img src='/app/images/pr.png' class=\"service_img\">\n           </div>\n            </div> \n         </li>\n       </ng-container>\n     </ul>  \n    </a>\n</div>",
        styles: ["\n .section {\n   border: 1px;\n   width: 85%;\n   margin: 0 auto;\n }\n  .collapse-button {'\n    overflow: hidden;\n    color: Black;\n    background-color: Transparent;\n    border: none;\n    width: 20px;\n    float: right;\n    padding: 3px;\n    border-radius: 3px;\n }\n .legend {\n  overflow: hidden;  \n  width: 100%;\n  background: #eeeeee;\n  color: Black;\n  border-radius: 4px\n  margin: 0 auto;\n }\n #status_keys{\n   width: 60%;   \n   margin: 0 auto;\n }\n #service_type{\n  margin: 0 auto;\n }\n .square{\n  width: 50px;\n   height: 25px; \n   padding: 3px; \n   float: left;\n }\n .legend-text{\n   float: left;\n   padding: 3px;\n }\n  ul {\n    list-style-type: square;\n  }\n   .patient-details  {\n    overflow: hidden;      \n    display:inline-block;\n    text-align:center;\n    width: 88%;\n    background-color: #eeeeee;\n    color: Black;\n    border-radius: 4px\n    margin: 0 auto;\n   }  \n   .patient-details:hover  {\n    background-color: #ffffff;\n   }  \n.block{\n  padding: 3px;\n  display:inline-block;\n  text-align:center;\n\n}\n.service_img {\n  padding: 6px; \n  width:140px; \n  height:38px;\n}\n "]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
/*var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);*/
var imageSource = "/app/images/action.png";
//# sourceMappingURL=app.component.js.map