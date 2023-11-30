import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {
  }


  // The Working Functions we need in this page

  Edit() {
    this.router.navigateByUrl('/edit-contact');
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
