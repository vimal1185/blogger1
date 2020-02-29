import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import {AuthGuardGuard} from '../auth/auth-guard.guard';
import { BlogFormComponent } from './blog-form/blog-form.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthGuardGuard],
    children:[
      {
        path:'',
        children:[
          {path:'blogs',component:ManageBlogsComponent},
          { path: 'blogs/create', component: BlogFormComponent },
          { path: 'blogs/edit/:id', component: BlogFormComponent },
          {path:'categories',component:ManageCategoriesComponent},
          {path:'pages',component:ManagePagesComponent},
          {path:'',component:AdminDashboardComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
