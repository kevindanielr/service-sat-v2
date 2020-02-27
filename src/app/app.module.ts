import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxMaskIonicModule } from 'ngx-mask-ionic';

// Google Maps
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMaps } from '@ionic-native/google-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CallNumber } from '@ionic-native/call-number/ngx';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import {HttpConfigInterceptor} from './httpConfig.interceptor';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot({
      hardwareBackButton: true,
      swipeBackEnabled: true
    }),
    NgxMaskIonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    CallNumber,
    YoutubeVideoPlayer,
    HttpClientModule,
    Camera,
    File,
    InAppBrowser,
    SocialSharing,
    FilePath,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
