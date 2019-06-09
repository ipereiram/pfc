import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Content-Type':  'application/json'    
  })
};
/*
  Generated class for the ProviderUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderExpenseProvider {  
  constructor(public http: HttpClient) {
    // console.log('Hello ProviderUserProvider Provider');
  }

  //Obtenció de dietes --------------------------
  getMyExpenses(){
    return this.http.get('http://localhost:49157/Api/Dieta/GetMyExpenses', httpOptions);
  }

  getExpenseById(data){
    return this.http.get('http://localhost:49157/Api/Dieta/GetDieta?id='+data, httpOptions);
  }

  getAllExpensesType(){
    return this.http.get('http://localhost:49157/Api/Dieta/GetAllTipusDieta', httpOptions);
  }

  getPendingValidateExp(){
    return this.http.get('http://localhost:49157/Api/Dieta/GetPendingValidateExpenses', httpOptions);
  }

  getPendingPayExp(){
    return this.http.get('http://localhost:49157/Api/Dieta/GetPendingPayExpenses', httpOptions);
  }

  // Controls de dietes --------------------------
  addExpense(data){
    return this.http.post('http://localhost:49157/Api/Dieta/AddDieta', data, httpOptions);
  }

  updateExpense(data){
    return this.http.post('http://localhost:49157/Api/Dieta/UpdateDieta', data, httpOptions);
  }

  saveExpense(data){  
    return this.http.post('http://localhost:49157/Api/Dieta/SaveDieta', data, httpOptions);
  }

  acceptExpense(data){
    return this.http.post('http://localhost:49157/Api/Dieta/AcceptDieta', data, httpOptions);
  }

  refuseExpense(data){
    return this.http.post('http://localhost:49157/Api/Dieta/RefuseDieta', data, httpOptions);
  }

  setPendingPayExpense(data){
    return this.http.post('http://localhost:49157/Api/Dieta/SetPendingPayDieta', data, httpOptions);
  }

  payExpense(data){
    return this.http.post('http://localhost:49157/Api/Dieta/PayDieta', data, httpOptions);
  }
}
