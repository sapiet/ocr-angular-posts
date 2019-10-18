import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menu = [
    {label: 'List', path: 'posts'},
    {label: 'New', path: 'new'}
  ];
}
