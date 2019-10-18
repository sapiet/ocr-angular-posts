import { Post } from '../models/post.model';
import {Subject} from 'rxjs';

export class PostService {
  postSubject = new Subject<Post[]>();

  private posts: Array<Post> = [
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

  public emit() {
    this.postSubject.next(this.posts.slice());
  }

  remove(post: Post) {
    this.posts.splice(this.posts.indexOf(post), 1);
    this.emit();
  }

  add(post: Post) {
    this.posts.push(post);
    this.emit();
  }

  loveIt(post: Post) {
    this.posts[this.posts.indexOf(post)].loveIts++;
    this.emit();
  }

  doNotloveIt(post: Post) {
    this.posts[this.posts.indexOf(post)].loveIts--;
    this.emit();
  }
}
