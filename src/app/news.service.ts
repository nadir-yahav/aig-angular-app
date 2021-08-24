import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article } from './pages/articles/article.resource';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private api: string = `${environment.api}/news`;
  private _favorites: Article[] = [];

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<string[]>(`${this.api}/GetCategories`);
  }
  getArticles(category: string) {
    return this.http.get<Article[]>(
      `${this.api}/GetArticles?category=${category}`
    );
  }
  getFavorites(): Article[] {
    return this._favorites;
  }
  addToFavorites(article: Article) {
    this._favorites.push(article);
  }
  removeFromFavorites(article: Article) {
    this._favorites = this._favorites.filter((art) => art.id != article.id);
  }
  inFavoriteList(article: Article) {
    return this._favorites.find((art) => art.id === article.id);
  }
}
