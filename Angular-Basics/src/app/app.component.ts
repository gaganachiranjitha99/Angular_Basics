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
  imgUrl="https://media.licdn.com/dms/image/D5603AQHbHGpprXuzAA/profile-displayphoto-shrink_800_800/0/1692292973588?e=2147483647&v=beta&t=VZeE63--wzywe3SogI-GdFI4Obkp5jnNVl_6kJXwJV0";

  @ViewChild(PostComponent) childComp: any;// to get data from child to parent
  constructor(){

    console.log(this.childComp);

  }
  ngAfterViewInit(){
    console.log(this.childComp);
    this.message=this.childComp;

  }
  receiveMessage($event: string){

    this.fromChildOutput=$event;
  }
}
