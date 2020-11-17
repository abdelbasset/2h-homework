import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
/**
 * This service acts as a mock back-end.
 * It has some intentional errors that you might have to fix.
 */
function randomDelay() {
    return Math.random() * 4000;
}
let BackendService = class BackendService {
    constructor() {
        this.storedTickets = [
            {
                id: 0,
                completed: false,
                assigneeId: 111,
                description: 'Install a monitor arm'
            },
            {
                id: 1,
                completed: false,
                assigneeId: 111,
                description: 'Move the desk to the new location'
            }
        ];
        this.storedUsers = [{ id: 111, name: 'Victor' }];
        this.lastId = 1;
        this.findUserById = id => this.storedUsers.find((user) => user.id === +id);
        this.findTicketById = id => this.storedTickets.find((ticket) => ticket.id === +id);
    }
    tickets() {
        return of(this.storedTickets).pipe(delay(randomDelay()));
    }
    ticket(id) {
        return of(this.findTicketById(id)).pipe(delay(randomDelay()));
    }
    users() {
        return of(this.storedUsers).pipe(delay(randomDelay()));
    }
    user(id) {
        return of(this.findUserById(id)).pipe(delay(randomDelay()));
    }
    newTicket(payload) {
        const newTicket = {
            id: ++this.lastId,
            completed: false,
            assigneeId: null,
            description: payload.description
        };
        return of(newTicket).pipe(delay(randomDelay()), tap((ticket) => this.storedTickets.push(ticket)));
    }
    assign(ticketId, userId) {
        const user = this.findUserById(+userId);
        const foundTicket = this.findTicketById(+ticketId);
        if (foundTicket && user) {
            return of(foundTicket).pipe(delay(randomDelay()), tap((ticket) => {
                ticket.assigneeId = +userId;
            }));
        }
        return throwError(new Error('ticket or user not found'));
    }
    complete(ticketId, completed) {
        const foundTicket = this.findTicketById(+ticketId);
        if (foundTicket) {
            return of(foundTicket).pipe(delay(randomDelay()), tap((ticket) => {
                ticket.completed = true;
            }));
        }
        return throwError(new Error('ticket not found'));
    }
};
BackendService = __decorate([
    Injectable()
], BackendService);
export { BackendService };
//# sourceMappingURL=backend.service.js.map