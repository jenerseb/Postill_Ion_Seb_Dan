var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Nav } from 'ionic-angular';
import { FeedListPage } from '../feed-list/feed-list';
import { FeedService } from '../../providers/feed-service';
export var HomePage = (function () {
    /*    feeds: Feed[]; */
    function HomePage(navController, feedService, alertCtrl) {
        //    this.bilderladen.checked = true;
        //    this.themeeinstellung.checked = true;
        this.navController = navController;
        this.feedService = feedService;
        this.alertCtrl = alertCtrl;
        this.rootPage = FeedListPage;
    }
    __decorate([
        ViewChild(Nav), 
        __metadata('design:type', Nav)
    ], HomePage.prototype, "nav", void 0);
    HomePage = __decorate([
        Component({
            selector: 'page-home',template:/*ion-inline-start:"D:\_WebProjects\_Detzler_App_Postillion_RSS\blank-rss-postillon-ionic2\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-menu side="right" [content]="content"> <!--\n  <ion-toolbar secondary>\n    <ion-title>Ressorts</ion-title>\n  </ion-toolbar> -->\n\n  <ion-content> <!--\n    <ion-list>\n      <button menuClose ion-item *ngFor="let feed of feeds" (click)="openFeed(feed)">\n        {{feed.title}}\n      </button>\n    </ion-list>\n    <button ion-button full (click)="addFeed()" action secondary>\n      <ion-icon name="add"></ion-icon> Add Feed\n    </button> -->\n\n\n    <ion-list>\n      <button  ion-item item-right icon-left onclick="window.open(\'http://www.der-postillon.com/\', \'_system\', \'location=yes\');">\n        <h3><ion-icon name="globe"></ion-icon> Postillon.com</h3>\n      </button>\n      <button  ion-item item-right icon-left onclick="window.open(\'https://www.facebook.com/DerPostillon\', \'_system\', \'location=yes\');">\n        <h3><ion-icon name="logo-facebook"></ion-icon> Auf Facebook folgen</h3>\n      </button>\n      <button  ion-item item-right icon-left onclick="window.open(\'https://plus.google.com/u/0/+postillon\', \'_system\', \'location=yes\');">\n        <h3><ion-icon name="logo-googleplus"></ion-icon> Auf Google+ folgen</h3>\n      </button>\n      <button menuClose ion-item item-right icon-left onclick="window.open(\'http://www.der-postillon.com/p/den-postillon-unterstutzen.html\', \'_system\', \'location=yes\');">\n        <h3><ion-icon name="logo-euro"></ion-icon> Postillon unterstützen</h3>\n      </button>\n      <button menuClose ion-item item-right icon-left>\n        <h3><ion-icon name="thumbs-up"></ion-icon> App bewerten</h3>\n      </button>\n      <button menuClose ion-item item-right icon-left onclick="window.open(\'http://www.der-postillon.com/p/uber-den-postillon.html\', \'_system\', \'location=yes\');">\n        <h3><ion-icon name="information-circle"></ion-icon> Impressum</h3>\n      </button>\n\n\n      <ion-item>\n        <ion-label><h3>Bilder laden</h3></ion-label>\n        <ion-toggle checked="true"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label><h3>Dyn. Themewechsel</h3></ion-label>\n        <ion-toggle checked="true"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label><h3>Pandasexualaktivität</h3></ion-label>\n        <!-- onclik notify Pandaaussterben erfolgreich beschleunigt -->\n        <ion-toggle checked="true" color="secondary"></ion-toggle>\n      </ion-item>\n<!--\n        <ion-segment [(ngModel)]="bilderladen" ion-item>\n          <ion-label>Theme</ion-label>\n          <form [formGroup]="myForm2">\n     <ion-segment formControlName="mapStyle" color="danger">\n       <ion-segment-button value="an">\n         An\n       </ion-segment-button>\n       <ion-segment-button value="aus">\n         Aus\n       </ion-segment-button>\n     </ion-segment>\n\n\n\n\n    <ion-segment [(ngModel)]="themeeinstellung">\n      <ion-label>Theme</ion-label>\n        <form [formGroup]="myForm2">\n   <ion-segment formControlName="mapStyle" color="danger">\n        <ion-segment-button value="hell">\n          Hell\n        </ion-segment-button>\n        <ion-segment-button value="dynamisch">\n          Auto\n        </ion-segment-button>\n        <ion-segment-button value="dunkel">\n          Dunkel\n        </ion-segment-button>\n      </ion-segment>\n-->\n    </ion-list>\n\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\_WebProjects\_Detzler_App_Postillion_RSS\blank-rss-postillon-ionic2\src\pages\home\home.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, FeedService, AlertController])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map