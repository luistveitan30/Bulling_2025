import { Component, OnInit } from '@angular/core';
import { ServicebillingService } from '../../services/servicebilling.service';
import { RouterLink} from '@angular/router';
import usercreate from '../../models/createuser';

@Component({
    selector: 'app-part1',
    imports: [],
    templateUrl: './part1.component.html',
    styleUrl: './part1.component.css'
})
export class Part1Component {

    User:usercreate

  constructor( public getServiceUser: ServicebillingService ){  
    
    this.User = {code: null, name: '', lastname: '', age: null, DNI: null}

    getServiceUser.SubjectionArticles.subscribe((next)=>{
        this.User = next
    })
    
}
}
