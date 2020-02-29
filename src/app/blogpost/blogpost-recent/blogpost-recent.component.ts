import { Component, OnInit } from '@angular/core';
import {Blogpost} from '../blogpost';
import {BlogpostService} from '../blogpost.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {
  
  title:'Recent Blog';
  blogs:Blogpost;
  error:{}
  constructor(private titleService: Title,private blogpostService: BlogpostService)
  { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.getRecentBlogs();  
  }

  getRecentBlogs()
  {
    this.blogpostService.getRecentBlogs().subscribe(
      (data:Blogpost)=> this.blogs=data,
      error =>this.error=error
    );
  }

}
