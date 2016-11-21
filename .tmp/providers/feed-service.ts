import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FeedService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class FeedItem {
  description: string;
  category: string;
  title: string;
  imgurl: string;

  constructor(description: string, category: string, title: string, imgurl: string) {
    this.description = description;
    this.category = category;
    this.title = title;
    this.imgurl = imgurl;
  }
}




@Injectable()
export class FeedService {

  constructor(private http: Http/*, public storage: Storage*/) {
  //  this.getArticlesForUrl();
  }

  public getArticlesForUrl() {
    var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2Cthumbnail%2Cdescription%2Ccategory%20from%20rss%20where%20url%3D%22'+encodeURIComponent('http://feeds.feedburner.com/blogspot/rkEL?format=xml')+'%22&format=json';
    let articles = [];
    return this.http.get(url)
    .map(data => data.json()['query']['results'])
    .map((res) => {
      if (res == null) {
        return articles;
      }
      let objects = res['item'];

      var length = 20;
      for (let i = 0; i < objects.length; i++) {
        //console.log('-'+i+'-');
        let item = objects[i];
        let shortDescription = item.description.slice(0,item.description.indexOf("mehr..."));
        if (i == 0) {
        //console.log('OBJ-0');
        let newFeedItem = new FeedItem(shortDescription, item.category, item.title, item.thumbnail.url);
        articles.push(newFeedItem);
        } else if (objects[i-1].title == objects[i].title) {
            //console.log('GLEICHE TITLE');
        } else {
          //console.log('UNTERSCHIEDLICHE TITLE');
          //console.log(objects[i].title);
          //console.log(objects[i-1].title);
          let newFeedItem = new FeedItem(shortDescription, item.category, item.title, item.thumbnail.url);
          articles.push(newFeedItem);
      } //console.log('FERTIG');
     // if (obj[i-1]).title = (obj[i]).title
       // hinzufügen (obj[i]).category zu (obj[i-1]).category [];
        //  var trimmedDescription = item.description.length > length ?
        //  item.description.substring(0, 80) + "..." :
        //  item.description;
      }

      return articles
    })
  }

}
