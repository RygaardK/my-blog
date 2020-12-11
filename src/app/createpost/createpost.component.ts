import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogService } from '../blog.service';

// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  model: BlogPost = new BlogPost(
    '', ''
  );

  

  title = "";
  content = "";
  
  constructor(private Service: BlogService) { }
  
  onPost(title, content){
    console.log('Clicked ', title, content)
    this.Service.createPost(title, content);
  }
  
  ngOnInit(): void {
    
  }
  
  // form = new FormGroup({
  //   title: new FormControl('', Validators.required),
  //   content: new FormControl('', Validators.required), 
  //  });

  // get title(){
  //   return this.form.get('title')
  // }
  // get content(){
  //   return this.form.get('content')
  // }
  // onSubmit(){
  //   alert(JSON.stringify(this.form.value))
  // }
 
}