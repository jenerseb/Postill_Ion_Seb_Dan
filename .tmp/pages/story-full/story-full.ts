import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the StoryFull page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-story-full',
  templateUrl: 'story-full.html'
})
export class StoryFull {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello StoryFull Page');
  }

}
