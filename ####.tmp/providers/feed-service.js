var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the FeedService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var FeedItem = (function () {
    function FeedItem(description, category, title, imgurl) {
        this.description = description;
        this.category = category;
        this.title = title;
        this.imgurl = imgurl;
    }
    return FeedItem;
}());
export var FeedService = (function () {
    function FeedService(http /*, public storage: Storage*/) {
        this.http = http;
        //  this.getArticlesForUrl();
    }
    FeedService.prototype.getArticlesForUrl = function () {
        var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2Cthumbnail%2Cdescription%2Ccategory%20from%20rss%20where%20url%3D%22' + encodeURIComponent('http://feeds.feedburner.com/blogspot/rkEL?format=xml') + '%22&format=json';
        var articles = [];
        return this.http.get(url)
            .map(function (data) { return data.json()['query']['results']; })
            .map(function (res) {
            if (res == null) {
                return articles;
            }
            var objects = res['item'];
            var length = 20;
            for (var i = 0; i < objects.length; i++) {
                // if (obj[i-1])
                // if (obj[i-1]).title = (obj[i]).title
                // hinzufügen (obj[i]).category zu (obj[i-1]).category [];
                var item = objects[i];
                var trimmedDescription = item.description.length > length ?
                    item.description.substring(0, 80) + "..." :
                    item.description;
                var newFeedItem = new FeedItem(trimmedDescription, item.category, item.title, item.thumbnail.url);
                articles.push(newFeedItem);
            }
            return articles;
        });
    };
    FeedService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], FeedService);
    return FeedService;
}());
//# sourceMappingURL=feed-service.js.map