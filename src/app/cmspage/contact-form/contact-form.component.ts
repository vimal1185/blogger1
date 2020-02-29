import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Contact} from '../contact';
import {CmspageService} from '../cmspage.service'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: {};
 
  constructor(private cmspageService:CmspageService,
              private router:Router) { }

  ngOnInit() {

  }
  onSubmit()
  {
      if(!this.submitted)
      {
    
        console.log(this.model)
        this.cmspageService.saveContact(this.model).subscribe(
          data => this.model = data,
          error => this.error = error
        );
        this.submitted=true;
      }
  }
  gotoHome()
  {
    debugger;
    this.router.navigate(['/']);
  }
}
