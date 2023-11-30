import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-all',
  templateUrl: './contact-all.component.html',
  styleUrls: ['./contact-all.component.css']
})
export class ContactAllComponent {
  contacts: Contact[] = [];
  contact: Contact;
  constructor(private contactService: ContactService) {
    this.contact = new Contact();
    this.getAllContacts();
  }

  // The Working Functions we need in this page 
  // This page is just a DEMO page to use in all other Components
  // This page help us understand the working of all the Buttons at once in single page.

  getAllContacts() {
    this.contactService.getAll().subscribe(response => {
      this.contacts = response;
      console.log(this.contacts);
    })
  }
  Add() {
    this.contactService.add(this.contact).subscribe(response => {
      this.getAllContacts();
    })
  }
  Search() {
    this.contactService.get(this.contact.id).subscribe(response => {
      this.contact = response
    })
  }
  Edit() {
    this.contactService.edit(this.contact).subscribe(response => {
      console.log(response);
      this.getAllContacts();
    })
  }
  Delete() {
    this.contactService.delete(this.contact.id).subscribe(response => {
      console.log(response)
      this.getAllContacts();
    })
  }

  
}


// This is the Sample code. Goto this page to know how all buttons work in the beginning stage.
// Now taking this as reference, applying html, bootstrap. We have done the project.