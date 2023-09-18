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


  @ViewChild(PostComponent) childComp;
  constructor(){

    console.log(this.childComp);

  }
  ngAfterViewInit(){
    console.log(this.childComp);

  }
}
