import { Component,ViewChild ,AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular-Basics';
  parentMessage:string='message from parent changed';
  message!: string;
  fromChildOutput!: string;

  @ViewChild(PostComponent) childComp: any;// to get data from child to parent
  constructor(){

    console.log(this.childComp);

  }
  ngAfterViewInit(){
    console.log(this.childComp);
    this.message=this.childComp;

  }
  receiveMessage($event: any){

    this.fromChildOutput=$event;
  }
}
