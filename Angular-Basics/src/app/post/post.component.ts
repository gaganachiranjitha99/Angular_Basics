import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})



export class PostComponent implements OnInit {

 

title :string ='list of posts';
message: string ="message post";

       @Input() fromParent:string;

        constructor(){}

  ngOnInit(): void {


    
  }

}
