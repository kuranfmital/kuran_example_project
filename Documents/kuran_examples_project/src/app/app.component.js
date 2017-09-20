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
        this.count = 0;
        console.log('Hello user');
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
    AppComponent.prototype.getCount = function (data, service) {
        var count = 0;
        var a;
        for (a = 0; a < data.length; a++) {
            if (data[a].service == service && data[a].statusKey == 'Completed') {
                count = count + 1;
            }
        }
        return count;
    }; // Counts the number of a completed 'service' in 'data' 
    AppComponent.prototype.filterSearch = function (params) {
        // params
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '/app/app.component.html',
        styleUrls: ['app/app.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map