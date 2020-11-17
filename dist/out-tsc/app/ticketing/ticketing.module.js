import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketingRoutingModule } from './ticketing-routing.module';
import { TicketingComponent } from './ticketing.component';
let TicketingModule = class TicketingModule {
};
TicketingModule = __decorate([
    NgModule({
        declarations: [
            TicketingComponent,
            TicketDetailsComponent,
        ],
        imports: [
            SharedModule,
            TicketingRoutingModule
        ],
        exports: [],
        entryComponents: [TicketingComponent]
    })
], TicketingModule);
export { TicketingModule };
//# sourceMappingURL=ticketing.module.js.map