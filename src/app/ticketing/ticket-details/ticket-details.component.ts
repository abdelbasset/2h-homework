import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/backend.service';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  ticket: Ticket;
  user: User;
  loading = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
			const id = params.id;
			if (typeof (id) !== 'undefined' && id != "") {
        this.backendService.ticket(id).subscribe(res => {
          this.ticket = res;
          this.backendService.user(this.ticket.assigneeId).subscribe(user => {
            this.user = user;
            this.loading = false;
          });

        })

      }
    })
  }

}
