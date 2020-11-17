import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketingComponent } from './ticketing.component';
const routes = [
    { path: '', component: TicketingComponent },
    { path: 'ticket-details', component: TicketDetailsComponent }
];
let TicketingRoutingModule = class TicketingRoutingModule {
};
TicketingRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TicketingRoutingModule);
export { TicketingRoutingModule };
//# sourceMappingURL=ticketing-routing.module.js.map