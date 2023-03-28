import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
name=""
ngOnInit(): void {
  var user:any=localStorage.getItem('user')
  this.name=user.name
}
}
