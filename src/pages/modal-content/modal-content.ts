import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { ProviderExpenseProvider } from '../../providers/provider-expense/provider-expense';

/**
 * Generated class for the ModalContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-content',
  templateUrl: 'modal-content.html',
})
export class ModalContentPage {

  typeExpenses;
  myObjStr;
  todo = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public platform: Platform, public viewCtrl: ViewController, public prvCtrl: ProviderExpenseProvider) {
    
  }

  ionViewDidLoad(){
    this.prvCtrl.getAllExpensesType()
    .subscribe(      
      (data)=> {this.typeExpenses = data;},
      (error)=> {console.log(error);}
    )    
  }
  
  logForm(){
    console.log(this.todo);    
    this.myObjStr = JSON.stringify(this.todo);
    
    this.prvCtrl.addExpense(this.myObjStr)
    .subscribe(
      (data)=> {this.navCtrl.last();},
      (error)=>{console.log(error);}      
    )
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }  
  
}
