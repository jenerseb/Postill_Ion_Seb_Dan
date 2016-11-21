import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { FeedService } from '../providers/feed-service';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { FeedListPage } from '../pages/feed-list/feed-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedListPage
  ],
  providers: [FeedService, Storage]
})
export class AppModule {}
