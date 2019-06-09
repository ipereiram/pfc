import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalManageExpensePage } from './modal-manage-expense';

@NgModule({
  declarations: [
    ModalManageExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalManageExpensePage),
  ],
})
export class ModalManageExpensePageModule {}
