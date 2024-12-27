import { Component } from '@angular/core';
import { ServicebillingService } from '../../services/servicebilling.service';
import articleformartModel from '../../models/createarticle';
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-part2',
    imports: [MatTableModule],
    templateUrl: './part2.component.html',
    styleUrl: './part2.component.css'
})
export class Part2Component {

    articleheader = ['articlecode','description', 'quantify', 'unitprice', 'discaunt', 'subTotal', 'tax','Total']

    constructor(public Servicehttps: ServicebillingService){
    }
    
}
