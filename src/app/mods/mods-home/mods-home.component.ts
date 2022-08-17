import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;
  items= [
    { title: 'Why is the sky blue', content: ' The sky is blue because'},
    { title: 'The new iPHONE is the best', content: 'Please do a review'},
    { title: 'Review Executed with comments', content: 'You executed an admin action with no comment'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen= !this.modalOpen;
  }

}
