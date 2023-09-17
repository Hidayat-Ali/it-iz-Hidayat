import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  constructor(private route: ActivatedRoute, private contentfulservice: ContentfulService) { }
  blogPost$: Observable<any> | undefined;
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.blogPost$ = this.contentfulservice.getPostById(id);
    }
    );

  }
  _returnHtmlFromRichText(richText: any) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }

}
