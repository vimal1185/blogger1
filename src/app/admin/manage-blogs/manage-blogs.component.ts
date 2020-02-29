import { Component, OnInit } from '@angular/core';
import {Blog} from '../../models/blog';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {
   
  title="Manage Blog";
  blogs:Blog;
  error={};

  constructor(private blogservice:BlogService) { }

  ngOnInit() {
    this.blogservice.getBlogs().subscribe(
      (data:Blog)=>this.blogs=data,
      error=>this.error=error
    )
  }
  onDelete(id:number)
  { debugger;
    if (confirm('Are you sure want to delete id = ' + id)) {
    this.blogservice.deleteBlog(+id).subscribe(
      res=>{
        console.log(res);
        this.ngOnInit();
      },
      error=>this.error=error
    )
  }
}
}
