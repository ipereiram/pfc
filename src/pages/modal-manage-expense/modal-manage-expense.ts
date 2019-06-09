import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProviderExpenseProvider } from '../../providers/provider-expense/provider-expense';

/**
 * Generated class for the ModalManageExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-manage-expense',
  templateUrl: 'modal-manage-expense.html',
})
export class ModalManageExpensePage {

  todo = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public prvCtrl: ProviderExpenseProvider) {
  }

  ionViewDidLoad(){    
    this.todo = this.navParams.data;    
  }

  accept(expense){
    this.prvCtrl.acceptExpense(expense)
    .subscribe(
      (data)=> {this.dismiss()},
      (error)=>{console.log(error);}      
    )
  }

  refuse(expense){
    this.prvCtrl.refuseExpense(expense)
    .subscribe(
      (data)=> {this.dismiss()},
      (error)=>{console.log(error);}      
    )
  }

  pendingPay(expense){
    this.prvCtrl.setPendingPayExpense(expense)
    .subscribe(
      (data)=> {this.dismiss()},
      (error)=>{console.log(error);}      
    )
  }

  pay(expense){
    this.prvCtrl.payExpense(expense)
    .subscribe(
      (data)=> {this.dismiss()},
      (error)=>{console.log(error);}      
    )
  }

  dismiss() {
    this.viewCtrl.dismiss();
  } 
}
