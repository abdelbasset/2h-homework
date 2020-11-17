import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
let TicketingComponent = class TicketingComponent {
    constructor(backendService) {
        this.backendService = backendService;
        this.users$ = this.backendService.users();
        this.tickets$ = this.backendService.tickets();
        this.activeCustomers = [
            'John',
            'Watson'
        ];
        this.inactiveCustomers = [
            'Adam',
            'Jack',
            'Katherin'
        ];
        this.todo = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.done = [
            'Get up',
            'Brush teeth',
            'Take a shower',
            'Check e-mail',
            'Walk dog'
        ];
    }
    ngOnInit() {
        console.log();
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            console.log('dropped Event', `> dropped '${event.item.data}' into '${event.container.id}'`);
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            console.log('dropped Event', `> dropped '${event.item.data}' into '${event.container.id}'`);
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    addTicket() {
    }
    detailsTicket(id_ticket) {
    }
};
TicketingComponent = __decorate([
    Component({
        selector: 'app-ticketing',
        templateUrl: './ticketing.component.html',
        styleUrls: ['./ticketing.component.css']
    })
], TicketingComponent);
export { TicketingComponent };
//# sourceMappingURL=ticketing.component.js.map