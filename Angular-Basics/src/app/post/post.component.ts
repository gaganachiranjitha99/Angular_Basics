import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

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
            outputChildMessage :String ="from child component via output";
           @Input()
            fromParent!: string;


          @Output()messageEvent=new EventEmitter<String>();

        constructor(){}

  ngOnInit(): void {


    
  }
  sendMessage(){

    this.messageEvent.emit(this.outputChildMessage);
  }

}
