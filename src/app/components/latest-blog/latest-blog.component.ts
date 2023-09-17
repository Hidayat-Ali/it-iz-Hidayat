import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';
@Component({
  selector: 'app-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css']
})
export class LatestBlogComponent {
  constructor(private contentfulservice: ContentfulService) { }
  blogPost$: Observable<any> | undefined;
  ngOnInit() {
    this.blogPost$ = this.contentfulservice.getAllPosts();

  }
  truncateText(text: string, numOfWords: number) {
    return text.split('').slice(0, numOfWords).join(' ');
  }
}
