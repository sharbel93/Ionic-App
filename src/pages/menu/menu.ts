import {Component, ViewChild} from '@angular/core';
import {App, IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
rootPage: any;
pages = [];
username = '';

// reference to the side menus root nav
  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private appCtrl:App) {
  }

  ionViewWillEnter() {
    if(this.authProvider.isAdmin()){
      this.pages = [
          { title: 'Admin Dashboard', page: 'AdminPage', icon: 'home'},
          { title: 'Admin Second Page', page: 'AdminSecondPage', icon: 'planet'}
          ];
      this.openPage('AdminPage');
  } else {
      this.pages = [
          { title: 'User Dashboard', page: 'UserPage', icon: 'home'},
          { title: 'User Second Page', page: 'UserSecondPage', icon: 'planet'}
      ];
      this.openPage('UserPage');
    }
  this.username = this.authProvider.currentUser.name;
  }

  logout() {
      this.authProvider.logout();
      this.appCtrl.getRootNav().setRoot('LoginPage');
  }

  openPage(page) {
      this.nav.setRoot(page);
  }

  ionViewCanEnter() {
      return this.authProvider.isLoggedIn();
  }

}
