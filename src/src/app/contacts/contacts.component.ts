import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserContacts} from "../contacts.resolver";

@Component({
  selector: 'app-customization-ag-grid-style-grid',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public contacts: UserContacts[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.contacts = this.route.snapshot.data['contacts'];
  }
}
