import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CurrencyMaskModule } from "ionicng2-currency-mask";

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ExpensesPage } from '../pages/expenses/expenses';
import { ModalContentPage } from '../pages/modal-content/modal-content';
import { ModalManageExpensePage } from '../pages/modal-manage-expense/modal-manage-expense';

import { HttpClientModule } from '@angular/common/http';
import { ProviderExpenseProvider } from '../providers/provider-expense/provider-expense';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    DashboardPage,
    ExpensesPage,
    ModalContentPage,
    ModalManageExpensePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CurrencyMaskModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    DashboardPage,
    ExpensesPage,
    ModalContentPage,
    ModalManageExpensePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProviderExpenseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
  ]
})
export class AppModule {}
