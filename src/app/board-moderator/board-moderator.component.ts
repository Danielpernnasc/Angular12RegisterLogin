import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';


@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  content?: string;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getModeratorBorad().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    )
  }

}
