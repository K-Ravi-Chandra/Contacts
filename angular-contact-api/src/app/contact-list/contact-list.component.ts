import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts: Contact[] = [];
  contact: Contact;
  constructor(private contactService: ContactService,private router: Router) {
    this.contact = new Contact();
    this.getAllContacts();
  }


  // The Working Functions we need in this page

  getAllContacts() {
    this.contactService.getAll().subscribe(response => {
      this.contacts = response;
      console.log(this.contacts);
    })
  }


  Edit() {
    this.router.navigateByUrl('/edit-contact');
  }

  Delete(id : number|undefined) {
    this.contactService.delete(id).subscribe(response => {
      console.log(response)
      this.getAllContacts();
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
