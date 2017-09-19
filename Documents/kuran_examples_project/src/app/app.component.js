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
        // templateUrl: '/app.component.html',
        // styleUrls: ['./app.component.css']
        template: "\n <div class=\"card\">\n  <ul style=\"list-style-type:none\"> \n    <ng-container *ngFor=\"let patient of data\">\n       <li class=\"patient-details\"> \n          <div class=\"block\"><a href=\"./patientpage.html\"> {{ patient.name }}</a></div>\n          <div class=\"block\"> Patient ID: {{ patient.patientID }} </div>\n          <div class=\"block\">  Date of Birth: {{ patient.dob }} </div>\n          <div class=\"block\"> Service ID: {{ patient.serviceID }}</div>\n          <div class=\"block\"> {{ patient.statusKey }}</div>    \n          <div class=\"block\"> {{ patient.service }}</div>\n       </li>\n    </ng-container>\n  </ul>  \n </div>",
        styles: ["\n  ul {\n    list-style-type: square;\n  }\n   .patient-details {\n    border: 2px solid black;\n    display: inline-block;\n    width: 100%;\n    margin: 0 auto;\n   }  \n.block{\n  width: 100px;\n  float: left;\n}\n "]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map