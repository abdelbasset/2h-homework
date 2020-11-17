import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketingComponent } from './ticketing.component';

const routes: Routes = [
    { path: '', component: TicketingComponent },
    { path: 'ticket-details/:id', component: TicketDetailsComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketingRoutingModule {}