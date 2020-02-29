import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CmspageRoutingModule } from './cmspage-routing.module';
import { PageComponent } from './page/page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    PageComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CmspageRoutingModule
  ],
  exports:[
    PageComponent
  ]
})
export class CmspageModule {
  constructor()
  {
    console.log("CmspageModule Loading..");
  }
 }
