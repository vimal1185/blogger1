import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import {BlogpostService} from '../blogpost.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:Category;
  error:{}
  constructor(private blogpostService: BlogpostService)
  { }

  ngOnInit() {
    
    this.getCategories();  
  }

  getCategories()
  {
    this.blogpostService.getCategories().subscribe(
      (data:Category)=> this.categories=data,
      error =>this.error=error
    );
  }

}
