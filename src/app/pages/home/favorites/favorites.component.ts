import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';
import { Article } from '../../articles/article.resource';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {}

  get favorites() {
    return this.newsService.getFavorites();
  }
  remove(article: Article) {
    this.newsService.removeFromFavorites(article);
  }
}
