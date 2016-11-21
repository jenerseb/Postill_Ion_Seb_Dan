import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
/* import { InAppBrowser } from 'ionic-native'; */
import { Http } from '@angular/http';
import {FeedService, FeedItem/*, Feed*/} from '../../providers/feed-service';

@Component({
  selector: 'page-feed-list',
  templateUrl: 'feed-list.html'
})
export class FeedListPage {
  articles: FeedItem[];
/*  selectedFeed: Feed; */
  loading: Boolean;

  constructor(private nav: NavController, private feedService: FeedService, private navParams: NavParams) {
/*    this.selectedFeed = navParams.get('selectedFeed'); */
  }
/*
  public openArticle(url: string) {
    InAppBrowser.open(url, '_blank');
    // window.open(url, '_blank');
  } */

  loadArticles() {
    this.loading = true;
    this.feedService.getArticlesForUrl().subscribe(res => {
      this.articles = res;
      this.loading = false;
    });
  }

  public ionViewWillEnter() {
    this.loadArticles();
  }
  }
