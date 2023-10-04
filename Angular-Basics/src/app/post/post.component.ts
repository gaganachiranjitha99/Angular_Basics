import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})



export class PostComponent {

 

            title :string ='list of posts';
            message: string ="message post";
            PostParentMessage:string='from paprent post';
            childMessage:string='from child component';
            outputChildMessage :String ="from child component via output";
            objArray :Array<object>=[
              {id:1,postTitle:'post1'},
              {id:2,postTitle:'post2'},
              {id:3,postTitle:'post3'},
              {id:4,postTitle:'post4'}
            ]




        constructor(){

          
        }

  


}
