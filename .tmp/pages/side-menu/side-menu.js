var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the SideMenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var SideMenu = (function () {
    function SideMenu(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SideMenu.prototype.ionViewDidLoad = function () {
        console.log('Hello SideMenu Page');
    };
    SideMenu = __decorate([
        Component({
            selector: 'page-side-menu',template:/*ion-inline-start:"D:\_WebProjects\_Detzler_App_Postillion_RSS\blank-rss-postillon-ionic2\src\pages\side-menu\side-menu.html"*/'<!--\n  Generated template for the SideMenu page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>side-menu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\_WebProjects\_Detzler_App_Postillion_RSS\blank-rss-postillon-ionic2\src\pages\side-menu\side-menu.html"*/
        }), 
        __metadata('design:paramtypes', [NavController])
    ], SideMenu);
    return SideMenu;
}());
//# sourceMappingURL=side-menu.js.map