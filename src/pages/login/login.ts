import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  user = {
    name: 'admin',
      pw: 'admin'
  };

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,private authProvider: AuthProvider, public navParams: NavParams) {
  }

  loginUser() {
    this.authProvider.login(this.user.name, this.user.pw).then(success => {
      if(success){
        this.navCtrl.setRoot('MenuPage');
      } else {
        let alert = this.alertCtrl.create({
            title: 'Login failed',
            message: 'Please check your credentials',
            buttons: ['OK']
        });
        alert.present();
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
