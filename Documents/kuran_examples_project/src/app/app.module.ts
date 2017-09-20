import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule,
   FormsModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
}


/*AppModule.controller('AppController', function ($scope) {
  $scope.toggle = true;

  $scope.$watch('toggle', function() {
    $scope.toggleText = $scope.toggle ? 'Toggle!' : 'some text';
  })
})*/
