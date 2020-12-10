import { Injectable } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})


export class BlogService {

  constructor() { }
  public loremTxt = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


  


  public blog: Post[] = [
    {id: 1, title: "test1", content: this.loremTxt},
    {id: 2, title: "test2", content: this.loremTxt},
    {id: 3, title: "test3", content: this.loremTxt},
    {id: 4, title: "test4", content: this.loremTxt},
    {id: 5, title: "test5", content: this.loremTxt},
    {id: 6, title: "test6", content: this.loremTxt},
    {id: 7, title: "test7", content: this.loremTxt},
    {id: 8, title: "test8", content: this.loremTxt},
    {id: 9, title: "test9", content: this.loremTxt}
  ]

  getAllPosts() {
    console.log(this.blog)
    /*array.forEach(element => {
      
    });*/
    return this.blog;
  }

  getPosts() {
    let array =  this.getAllPosts()
    return array.slice(this.blog.length-5, this.blog.length);
  }

  getRecentPost() {
    return this.blog[this.blog.length-1];
  }

  

}
