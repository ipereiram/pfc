import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ExpensesPage } from '../expenses/expenses';
import { LoginPage } from '../login/login';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',  
})

export class DashboardPage {

  page;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.page = menuCtrl.enable(true);        
    this.page = navParams.data.page;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DashboardPage');
  // }

  loadExpenses(item) {
    this.navCtrl.push(ExpensesPage, {item: item });
  }

  toggleLeftMenu() {
    this.menuCtrl.toggle();
  }

  closeMenu(page) {
    this.navCtrl.setRoot(LoginPage, {page : page});    
  }

  closePage() {
    this.navCtrl.push(LoginPage);
  }

}
