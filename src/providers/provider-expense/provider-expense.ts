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
    console.log('Hello ProviderUserProvider Provider');
  }

  getMyExpenses(){
    return this.http.get('http://localhost:49157/Api/Dieta/GetMyExpenses', httpOptions);
  }

  getAllExpensesType(){
    return this.http.get('http://localhost:49157/Api/Dieta/GetAllTipusDieta', httpOptions);
  }

  addExpense(data){
    return this.http.post('http://localhost:49157/Api/Dieta/AddDieta', data, httpOptions);
  }

  // getStateExpense(data){
  //   return this.http.get('http://localhost:49157/Api/Dieta/GetEstatDietaById?id='+data, httpOptions);
  // }

}
