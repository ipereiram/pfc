import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalContentPage } from '../modal-content/modal-content';
import { ModalManageExpensePage } from '../modal-manage-expense/modal-manage-expense';
import { ProviderExpenseProvider } from '../../providers/provider-expense/provider-expense';

/**
 * Generated class for the ExpensesPage page.
 *
 * See https://ionicframework.
 * com/docs/components/#navigation for more info on
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

  editForm(expense){
    let modal = this.modalCtrl.create(ModalContentPage, expense);
      modal.present(expense);
  }

  viewDetail(expense){
    let modal = this.modalCtrl.create(ModalManageExpensePage, expense);
      modal.present(expense);
  }

  save(expense){   
    this.prvCtrl.saveExpense(expense)
      .subscribe(
        (data)=> {this.navCtrl.last();},
        (error)=>{console.log(error);}      
      ) 
  }    

  ionViewDidLoad(){    
    
    if (this.item == "Validate"){      
      this.prvCtrl.getPendingValidateExp()
      .subscribe(
        (data)=> {this.expenses = data;},
        (error)=> {console.log(error);}
      )

    } else if (this.item == "Pay"){      
      this.prvCtrl.getPendingPayExp()
      .subscribe(
        (data)=> {this.expenses = data;},
        (error)=> {console.log(error);}
      )

    } else {
      this.prvCtrl.getMyExpenses()
      .subscribe(
        (data)=> {this.expenses = data;},
        (error)=> {console.log(error);}
      )
    }
        
  }  

}
