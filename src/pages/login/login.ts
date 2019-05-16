import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, App } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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
  
  user: Object;
  data = { username: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, 
      public menu: MenuController, public app: App, public authCtrl: AuthServiceProvider) {

    menu.enable(true);
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

  
  presentPrompt() {
    console.log(this.user);
    if (this.user != null){
      this.loadDashBoard(DashboardPage);
    } else {
      let alert = this.alertCtrl.create({
        title: 'Login',
        message: 'Invalid user or password',      
        buttons: [
          {
            text: 'Ok'
          }
        ]
      });
      alert.present();
    }           
  }

  loadDashBoard(page) {
    this.navCtrl.setRoot(DashboardPage, {page : page});    
  }

  getCredencials(){
    this.authCtrl.authUser(this.data)
    .subscribe(      
      (data)=> {this.user = data; this.presentPrompt()},
      (error)=> {console.log(error);}
    )
  }

}
