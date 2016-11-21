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
import { NavController, NavParams } from 'ionic-angular';
import { FeedService } from '../../providers/feed-service';
export var FeedListPage = (function () {
    function FeedListPage(nav, feedService, navParams) {
        this.nav = nav;
        this.feedService = feedService;
        this.navParams = navParams;
        /*    this.selectedFeed = navParams.get('selectedFeed'); */
    }
    /*
      public openArticle(url: string) {
        InAppBrowser.open(url, '_blank');
        // window.open(url, '_blank');
      } */
    FeedListPage.prototype.loadArticles = function () {
        var _this = this;
        this.loading = true;
        this.feedService.getArticlesForUrl().subscribe(function (res) {
            _this.articles = res;
            _this.loading = false;
        });
    };
    FeedListPage.prototype.ionViewWillEnter = function () {
        this.loadArticles();
    };
    FeedListPage = __decorate([
        Component({
            selector: 'page-feed-list',template:/*ion-inline-start:"D:\_WebProjects\_Detzler_App_Postillion_RSS\blank-rss-postillon-ionic2\src\pages\feed-list\feed-list.html"*/'<!--\n  Generated template for the FeedList page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="barbar">\n  <ion-navbar class="barbarbar">\n  <!--   <ion-title>ARTIKEL</ion-title> -->\n    <img src="http://1.bp.blogspot.com/-Kq3ywyddDEY/VLL_tKIUX-I/AAAAAAAAdHo/7FN9qWnXe2c/s1600/Logo.png" />\n    <ion-buttons end>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="feed-list" padding>\n  <ion-spinner *ngIf="loading" id="feed-spinner"></ion-spinner>\n  <ion-list> <!-- class="spinner"> -->\n    <ion-item *ngFor="let item of articles" class="feed-article" text-wrap>\n      <div class="article-title"><h2>{{item.title}}</h2></div><br>\n      <p [innerHtml]="item.description"></p>\n      <!-- <p [innerHtml]="item.category" class="category" color="primary"></p> -->\n      <img src="{{item.imgurl}}">\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\_WebProjects\_Detzler_App_Postillion_RSS\blank-rss-postillon-ionic2\src\pages\feed-list\feed-list.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, FeedService, NavParams])
    ], FeedListPage);
    return FeedListPage;
}());
//# sourceMappingURL=feed-list.js.map