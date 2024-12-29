import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../modules/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 

  @Input() getpost !:Ipost
  constructor() { }

  ngOnInit(): void {
  }

}
