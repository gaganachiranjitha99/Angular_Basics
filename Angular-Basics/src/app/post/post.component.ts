import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})



export class PostComponent implements OnInit {

 

            title :string ='list of posts';
            message: string ="message post";
            PostParentMessage:string='from paprent post';
            childMessage:string='from child component';

           @Input()
            fromParent!: string;

        constructor(){}

  ngOnInit(): void {


    
  }

}
