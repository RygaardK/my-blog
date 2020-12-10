import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.css']
})
export class AllpostComponent implements OnInit {
  
  public ourPosts = [];

  constructor(private service: BlogService ) { }

  ngOnInit(): void {
    this.ourPosts = this.service.getAllPosts();
  }

}
