import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Contact } from '../models/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {

  @Input() contacts: Contact[] = []
  @Output() selectContact = new EventEmitter<Contact>()

  constructor() { }

  onContactClick(contact: Contact){
    this.selectContact.emit(contact);
  }

}
