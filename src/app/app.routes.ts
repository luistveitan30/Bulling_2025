import { Routes } from '@angular/router';
import { PageclientsComponent } from './pages/pageclients/pageclients.component';
import { AppComponent } from './app.component';
import { ClientcreateComponent } from './pages/clientcreate/clientcreate.component';
import { PagearticlesComponent } from './pages/pagearticles/pagearticles.component';

export const routes: Routes = [
    {path: './', component: AppComponent},
    {path: 'clients', component: PageclientsComponent, children: [
        {path: 'createuser', component: ClientcreateComponent}
    ]},
    {path: 'articles', component: PagearticlesComponent}
];
