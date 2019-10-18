import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {
  @Input() post: Post;

  constructor(private postService: PostService) {
  }

  loveIt() {
    this.postService.loveIt(this.post);
  }

  doNotloveIt() {
    this.postService.doNotloveIt(this.post);
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'list-group-item-success';
    } else if (this.post.loveIts < 0) {
      return 'list-group-item-danger';
    }
  }

  remove() {
    if (!confirm('Êtes-vous certain(e) de vouloir supprimer cet article ?')) {
      return;
    }

    this.postService.remove(this.post);
  }
}
