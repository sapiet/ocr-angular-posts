import { Component } from '@angular/core';
import {Post} from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public posts: Array<Post> = [
    new Post(
      'Mon premier post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, voluptatibus.'
    ),
    new Post(
      'Mon deuxième post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, voluptatibus.'
    ),
    new Post(
      'Encore un post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, voluptatibus.'
    )
  ];
}
