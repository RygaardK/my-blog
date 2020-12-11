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
    {id: 0, title: "test0", content: this.loremTxt},
    {id: 1, title: "test1", content: this.loremTxt},
    {id: 2, title: "test2", content: this.loremTxt},
    {id: 3, title: "test3", content: this.loremTxt},
    {id: 4, title: "test4", content: this.loremTxt},
    {id: 5, title: "test5", content: this.loremTxt},
    {id: 6, title: "test6", content: this.loremTxt},
    {id: 7, title: "test7", content: this.loremTxt},
    {id: 8, title: "test8", content: this.loremTxt}
  ]

  getAllPosts() {
    return this.blog;
  }

  getPosts() {
    let array =  this.getAllPosts() // return 5 blog post
    return array.slice(this.blog.length-5, this.blog.length).reverse();
  }

  getRecentPost() {
    return this.blog[this.blog.length-1];
  }

  createPost(title, content) {
    let newPost = {id: this.blog.length, title: title, content: content};
    this.blog.push(newPost);
  }
  
  deletePost(post){
    // this.blog = this.blog.filter( blog => blog !== post.id ) /*fungera inte alls.*/
    
    // delete this.blog[id-1]; /* Blev renderings fel, kanske måste lyssna på den på något sätt. */

    // this.blog.forEach((post,index) => {
    //   index++
    //   if(index == post.id) {
    //     this.blog.splice(index,1);
    //     console.log()
    //   }
    // });    /*Raderar posten nedanför, får inte till det.*/
    
    const index: number = post;
 
    this.blog.splice(post, 1);

  /*Raderar.... men helt fel*/

    
    console.log('IDID: ', post)
    console.log(this.blog)
  }

}
