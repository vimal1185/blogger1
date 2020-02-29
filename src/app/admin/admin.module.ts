import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { BlogFormComponent } from './blog-form/blog-form.component';

@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent, ManageBlogsComponent, ManagePagesComponent, ManageCategoriesComponent, BlogFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
  constructor()
  {
    console.log("AdminModule Loading..");
  }
 }
