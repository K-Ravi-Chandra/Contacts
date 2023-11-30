import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})

export class EditContactComponent {
  contacts: Contact[] = [];
  contact: Contact;
  constructor(private contactService: ContactService, private router: Router) {
    this.contact = new Contact();
  }


  // The Working Functions we need in this page

  Search() {
    this.contactService.get(this.contact.id).subscribe(response => {
      this.contact = response
    })
  }  

  Edit() {   // Save Button
    this.contactService.edit(this.contact).subscribe(response => {
      console.log(response);
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
