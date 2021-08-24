import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/news.service';
import { Article } from './article.resource';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.newsService
      .getArticles(this.route.snapshot.queryParams.category)
      .subscribe((r) => (this.articles = r));
  }

  addToFavorites(article: Article) {
    this.newsService.addToFavorites(article);
  }
  removeFromFavorites(article: Article) {
    this.newsService.removeFromFavorites(article);
  }
  inFavoriteList(article: Article) {
    return this.newsService.inFavoriteList(article);
  }
}
