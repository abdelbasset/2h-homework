import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Ticket } from "src/interfaces/ticket.interface";
import { User } from "src/interfaces/user.interface";
import { BackendService } from "../backend.service";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { map } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-ticketing",
  templateUrl: "./ticketing.component.html",
  styleUrls: ["./ticketing.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class TicketingComponent implements OnInit {
  public readonly users$: Observable<User[]> = this.backendService.users();
  public readonly tickets$: Observable<
    Ticket[]
  > = this.backendService.tickets();

  TicketsSubscription: Subscription;
  ticketsDone: Ticket[] = [];
  ticketsProgress: Ticket[] = [];
  tickets: Ticket[] = [];
  ticketForm: FormGroup;
  listUser: User[];
  showAdd = false;
  loading = true;
  hasFormErrors = false;
  maxId = 0;

  constructor(
    private readonly backendService: BackendService,
    private ticketFB: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.refreshTickets();
  }

  refreshTickets() {
    this.TicketsSubscription = this.tickets$.subscribe((res) => {
      this.tickets = res;
      res.map((ticket) => {
        if (this.maxId < ticket.id) {
          this.maxId = ticket.id;
        }
        if (ticket.completed) {
          this.ticketsDone.push(ticket);
        } else {
          this.ticketsProgress.push(ticket);
        }
      });
      this.loading = false;
      console.log(++this.maxId)
    });
  }

  createForm() {
    this.ticketForm = this.ticketFB.group({
      description: new FormControl("", Validators.required),
      user: new FormControl("", Validators.required),
    });
    this.backendService.users().subscribe((res) => {
      this.listUser = res;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      let ticketID = event.container.data[event.currentIndex]["id"];
      var index = this.tickets.map((o) => o.id).indexOf(ticketID);
      this.tickets[index].completed = !this.tickets[index].completed;
      /* if(this.tickets[index].completed){
        this.backendService.complete(this.tickets[index].id, this.tickets[index].completed).subscribe(res=> {
        })
      } */
      this.openSnackBar('Ticket Updated', 'OK')
    }
  }

  addTicket() {
    this.loading = true;
    this.hasFormErrors = false;
    const controls = this.ticketForm.controls;
    /** check form */
    if (this.ticketForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      this.hasFormErrors = true;
      return;
    }

    let ticket = {
      description: controls.description.value,
      user: controls.user.value,
      lastId: ++this.maxId,
    };

    this.backendService.newTicket(ticket).subscribe((res) => {
      console.log(res);
      this.ticketsProgress.push(res);
      this.ticketForm.reset();
      this.loading = false;
    });
  }

  detailsTicket(id_ticket) {
    this.router.navigate(["./ticket-details/" + id_ticket], {
      relativeTo: this.activatedRoute,
    });
  }

  updateTicket(idTicket, userId){
    this.backendService.assign(idTicket, userId).subscribe(res => {
      this.openSnackBar('Ticket Updated', 'OK')
    })
  }

  changeUser(idUser){
    
    
    let filtredProgressList = [];
    let filtredDoneList = [];

    this.tickets.map(ticket => {
      if(ticket.assigneeId === idUser){
        if(ticket.completed){
          filtredDoneList.push(ticket);
        }else{
          filtredProgressList.push(ticket);
        }
      }
    });

    this.ticketsProgress = filtredProgressList;
    this.ticketsDone = filtredDoneList;
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnDestroy() {
    if (this.TicketsSubscription) {
      this.TicketsSubscription.unsubscribe();
    }
  }
}
