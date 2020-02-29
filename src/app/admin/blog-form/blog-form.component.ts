import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params,ParamMap} from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { CategoryValidate,ValidationUplodFile } from '../commonvalidation';


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  pageTitle: string;
  error={};
  uploadError: string;
  imagePath: string;
  id:number;
  blogForm: FormGroup;
  submitted = false;

  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']

  constructor(private fb: FormBuilder,
              private blogService: BlogService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.id =parseInt(this.route.snapshot.paramMap.get('id'));
    if(this.id>0)
    {
        this.pageTitle="Edit Blog";
        this.blogService.getBlog(this.id).subscribe(
          res => {
            console.log(res);
            this.blogForm.patchValue({
              title: res.title,
              description: res.description,
              is_featured: res.is_featured,
              is_active: res.is_active,
              id: res.id,
              selcategory:1,
              acceptTerms:true
            });
            this.imagePath = res.image;
          }
        );
    }
    else
    {
        this.pageTitle="Add Blog";
    }
  
    this.blogForm=this.fb.group(
      { 
        id: new FormControl(''),
        title :new FormControl('', [Validators.required]),
        description :new FormControl('', [Validators.required]),
        is_featured :new FormControl('0'),
        is_active :new FormControl('1'),
        selcategory:new FormControl('',[Validators.required,CategoryValidate]),
        image : new FormControl('',[Validators.required]),
        acceptTerms:new FormControl(true, [Validators.requiredTrue]),
        hiddenimage:new FormControl('')
      }
    );
    this.SetDefault();
  
  }
  
  SetDefault()
  {
  
  let blogFormDefault = {
    image:'',
    hiddenimage:'',
    title:'',
    description:'',
    is_featured: 0,
    is_active:1,
    id: '',
    selcategory:'',
    acceptTerms:true
  };
  this.blogForm.setValue(blogFormDefault);
  

  }
  get f(){return this.blogForm.controls;}

  onSubmit()
  {
    
    this.submitted = true;
    const formData = new FormData();
    formData.append('Title', this.blogForm.get('title').value);
    formData.append('Description', this.blogForm.get('description').value);
    formData.append('IsFeatured', this.blogForm.get('is_featured').value);
    formData.append('IsActive', this.blogForm.get('is_active').value);
    formData.append('Image', this.blogForm.get('hiddenimage').value);

    console.log(formData);
    const id = this.blogForm.get('id').value;
    debugger;
    if(id>0)
    {
      this.blogService.updateBlog(formData,+id).subscribe(
        res=>{
          if(res.status==='error')
          {
            this.uploadError = res.message;
          }
          else
          {
            this.router.navigate(['/admin/blogs']);
          }
      },error=> this.error = error);
    }
    else
    {
      this.blogService.createBlog(formData).subscribe(
        res=>{
          if(res.status==='error')
          {
            this.uploadError = res.message;
          }
          else
          {
            this.router.navigate(['/admin/blogs']);
          }
      },error=> this.error = error);
    }
  }
  onSelectedFile(event) {
    debugger;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.blogForm.get('hiddenimage').patchValue(file);
      this.blogForm.get('hiddenimage').setValidators([ValidationUplodFile('png')]);
      this.blogForm.get('hiddenimage').updateValueAndValidity();
     // this.blogForm.get('hiddenimage').patchValue(file);
    
     
    }
  }
 
  
}
