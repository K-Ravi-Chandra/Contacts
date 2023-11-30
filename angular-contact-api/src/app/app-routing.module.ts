import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactAllComponent } from './contact-all/contact-all.component';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

// Create the path names & map them to the output Webpage Component you want to get.
const routes: Routes = [
  {path:'contact-all',component:ContactAllComponent},
  {path:'home',component:HomeComponent},
  {path:'contact-list',component:ContactListComponent},
  {path:'add-contact',component:AddContactComponent},
  {path:'edit-contact',component:EditContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
