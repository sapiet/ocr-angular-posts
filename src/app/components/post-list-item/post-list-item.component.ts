import {Component, Input} from '@angular/core';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {
  @Input() post: Post;

  loveIt() {
    this.post.loveIts++;
  }

  doNotloveIt() {
    this.post.loveIts--;
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'list-group-item-success';
    } else if (this.post.loveIts < 0) {
      return 'list-group-item-danger';
    }
  }
}
