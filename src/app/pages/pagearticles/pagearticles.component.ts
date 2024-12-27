import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicebillingService } from '../../services/servicebilling.service';
import { CdkDrag } from '@angular/cdk/drag-drop'
@Component({
  selector: 'app-pagearticles',
  imports: [RouterLink, CdkDrag],
  templateUrl: './pagearticles.component.html',
  styleUrl: './pagearticles.component.css'
})
export class PagearticlesComponent {

  constructor(public serviceUserhttp: ServicebillingService){}

}
