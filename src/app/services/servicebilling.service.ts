import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import usercreate from '../models/createuser';
import articleformartModel from '../models/createarticle';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicebillingService{

Clients: usercreate[] = []
  Articles: any['select * from empleados'] = []

SubjectArticles = new Subject<usercreate>()
SubjectionArticles = this.SubjectArticles.asObservable()

FilteredClient: any[] = [this.Clients]


  constructor(public servicehttp: HttpClient) {
    this.Clients = [
      {code: 55259, name: 'Adrian',lastname: 'Marcelo',age: 26,DNI: 23332353},
      {code: 55260, name: 'Benjamin',lastname: 'Coral Gonzales', age: 30,DNI: 12323255},
      {code: 55261, name: 'Maria', lastname: 'Antonieta',age: 15,DNI: 5555585},
      {code: 55261, name: 'Uriel', lastname: 'Salvador', age: 28,DNI: 55585},
      {code: 55262, name: 'Baltazar',lastname: 'Salazar',age: 29,DNI: 555855},
      {code: 55263, name: 'Cindy',lastname: 'new test', age: 25,DNI: 55555}
    ]
    this.FilteredClient = [...this.Clients]
    this.Articles = []
  }
  getUser(){
   return this.servicehttp.get<usercreate[]>('https://cab8ad8de16d764fa7e2.free.beeceptor.com/api/users').subscribe({
    next: (data)=>{this.Clients = data}
   })}
  createuser(user:usercreate){
    return this.servicehttp.post<usercreate>('https://cab8ad8de16d764fa7e2.free.beeceptor.com/api/users', user)
  }
  SearchinUser(Searching:any){
    if(!Searching){
      this.FilteredClient = this.Clients
    }else{
      this.FilteredClient = this.Clients.filter((client)=>{
      return client.name.toLowerCase().includes(Searching.toLowerCase()) || client.lastname.toLowerCase().includes(Searching.toLowerCase()) || client.code?.toString().includes(Searching) || client.DNI?.toString().includes(Searching)
  })}
}
 addpayingClient(addclient:any){
   this.SubjectArticles.next(addclient)
}


}
