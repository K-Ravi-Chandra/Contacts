import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent  {
  contacts: Contact[] = [];
  contact: Contact;
  constructor(private contactService: ContactService, private router: Router) {
    this.contact = new Contact();
  }


  // The Working Functions we need in this page
  Add() {
      this.contactService.add(this.contact).subscribe(response => {
        this.router.navigateByUrl('/contact-list');
      })
  }


  // The Router Navigation Buttons in this page

  ContactList() {
    this.router.navigateByUrl('/contact-list');
  }

  Home() {
    this.router.navigateByUrl('/home');
  }
  
  AddNewContact() {
    this.router.navigateByUrl('/add-contact');
  }
  
  
}
