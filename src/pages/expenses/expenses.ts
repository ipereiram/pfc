import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalContentPage } from '../modal-content/modal-content';
import { ProviderExpenseProvider } from '../../providers/provider-expense/provider-expense';

/**
 * Generated class for the ExpensesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html',
})
export class ExpensesPage {

  item;
  expenses;

  constructor(public navCtrl: NavController, public navParams: NavParams, public prvCtrl: ProviderExpenseProvider, public modalCtrl: ModalController) {
    this.item = navParams.data.item;    
  }

  openForm(characterNum){    
      let modal = this.modalCtrl.create(ModalContentPage, characterNum);
      modal.present();
  }

  ionViewDidLoad(){
    this.prvCtrl.getMyExpenses()
    .subscribe(
      (data)=> {this.expenses = data;},
      (error)=> {console.log(error);}
    )    
  }

  editForm(item){
    let modal = this.modalCtrl.create(ModalContentPage, item);
      modal.present();
  }

}
