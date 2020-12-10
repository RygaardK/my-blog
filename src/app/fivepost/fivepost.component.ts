import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-fivepost',
  templateUrl: './fivepost.component.html',
  styleUrls: ['./fivepost.component.css']
})
export class FivepostComponent implements OnInit {

  constructor(private service: BlogService) { }
  public fivePost = [];

  ngOnInit(): void {
    this.fivePost = this.service.getPosts();
  }

}
