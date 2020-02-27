import {Component, OnInit} from '@angular/core';
import {MenuController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from './services/auth.service';
import {AuthConstants} from './config/auth-constants';
import {StorageService} from './services/storage.service';
import {AuthUser} from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  authUser: AuthUser;
  user: string;
  loggedIn: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private storageService: StorageService,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.checkStorage();

  }

  userData() {
    this.checkStorage();
    if (this.authUser.access_token !== null) {
      this.user = this.authUser.nombre;
      this.loggedIn = true;
    }

    if (!this.authUser) {
      this.loggedIn = false;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logOut() {
    this.authService.logout();
    this.loggedIn = false;
    this.checkStorage();
  }

  menuOpened() {
     this.userData();
  }

  async checkStorage() {
    this.authUser = await this.authService.userData();
  }
}
