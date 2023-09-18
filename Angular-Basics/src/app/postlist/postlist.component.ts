import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit{


  @Input()
  fromPostParent!: string;

  ngOnInit(): void {
    
  }




  constructor(){

  }

}
