import { Component } from '@angular/core';
import { ServicebillingService } from '../../services/servicebilling.service';
import {FormControl, FormGroup, MaxValidator, ReactiveFormsModule, Validators} from '@angular/forms'
import usercreate from '../../models/createuser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-clientcreate',
  imports: [ReactiveFormsModule, CdkDrag, RouterLink],
  templateUrl: './clientcreate.component.html',
  styleUrl: './clientcreate.component.css'
})
export class ClientcreateComponent{

  FormuserCreate: FormGroup


  constructor(public serviceclient: ServicebillingService){

    this.FormuserCreate = new FormGroup({
      code: new FormControl('', [Validators.required,Validators.maxLength(5)]),
      name: new FormControl('', Validators.required),
      lastname: new FormControl(''),
      age: new FormControl(''),
      DNI: new FormControl('')
    })

    console.log(serviceclient.Clients)

  }

  sendNewUser(){
      this.serviceclient.createuser(this.FormuserCreate.value).subscribe({
      next: (data)=>{
        this.serviceclient.getUser()
        console.log('Se ha Agregado Correctamente el usuario')
      }
    })
  }





}
