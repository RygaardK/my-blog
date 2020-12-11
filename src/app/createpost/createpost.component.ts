import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogService } from '../blog.service';


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
 
}