import { Component, importProvidersFrom, inject} from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import { AppComponent } from '../../app.component';
import { CdkPortal } from '@angular/cdk/portal';
import { ServicebillingService } from '../../services/servicebilling.service';
import usercreate from '../../models/createuser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatTableModule} from '@angular/material/table'
import { CdkTable, CdkTableModule } from '@angular/cdk/table';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
    selector: 'app-pageclients',
    imports: [RouterLink, RouterOutlet, CdkDrag, ScrollingModule, MatTableModule, CdkTableModule, FormsModule],
    templateUrl: './pageclients.component.html',
    styleUrl: './pageclients.component.css'
})
export class PageclientsComponent {

  userfilter:any=''
  DisplayRow : string[] = ['codigo', 'nombre', 'apellido']

  DataStorage = [{
    codigo: 55858,
    nombre: 'Luis Ramirez',
    apellido: 'Morales Ramirez' 
  }]

  SelectionRow = new Set<any>()

/*con la variable router habilitamos la libreria Router para utilizar lo que contiene, dependiendo de lo que necesitemos hacer
  */  constructor(private routers: Router, public serviceUserhttp: ServicebillingService){
        serviceUserhttp.getUser()
       
   }
   validatoring(row:any){
    if(this.SelectionRow.has(row)){
       this.SelectionRow.delete(row)
    }else if(!this.SelectionRow.has(row)){
      this.SelectionRow.add(row)
    }
    //console.log(this.SelectionRow)
   }
   addclienttomain(rowclient:any){
    this.serviceUserhttp.addpayingClient(rowclient)
    this.routers.navigateByUrl('')
   }

}
