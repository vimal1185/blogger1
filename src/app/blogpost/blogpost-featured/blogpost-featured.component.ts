import { Component, OnInit } from '@angular/core';
import {Blogpost} from '../blogpost';
import {BlogpostService} from '../blogpost.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {

  title = 'Featured Blogs';
  blogs: Blogpost;
  error: {};

  constructor(private titleService: Title,private blogpostService: BlogpostService)
  { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.getFeaturedBlogs();
  }
  getFeaturedBlogs()
  {
    this.blogpostService.getFeaturedBlogs().subscribe(
      (data:Blogpost)=>this.blogs=data,
      error=>this.error=error
    );
  }
}
