import { Component, OnInit } from '@angular/core';
import { BlogService, Post } from '../blog.service';


@Component({
  selector: 'app-recentpost',
  templateUrl: './recentpost.component.html',
  styleUrls: ['./recentpost.component.css']
})
export class RecentpostComponent implements OnInit {

  constructor(private service: BlogService) {  this.onaPost = this.service.getRecentPost(); }
  
  public onaPost:Post = {
    id: 1,
    title: "",
    content: ""
  };  


  ngOnInit(): void {
  
  }

}
