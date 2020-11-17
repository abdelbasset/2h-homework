import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { 
        path: '', 
        loadChildren: () => import('./ticketing/ticketing.module').then(m => m.TicketingModule) 
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule {}
  