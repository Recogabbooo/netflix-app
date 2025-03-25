import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Movie } from '../movies.interface';

@Component({
  selector: 'app-movie-row',
  imports: [],
  templateUrl: './movie-row.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieRowComponent { 
  title = input<string>('Trending')
  movies = input.required<Movie[]>()

  private readonly BASE_URL = 'https://image.tmdb.org/t/p/w500';

  getImageUrl(PosterPath: string): string {
    return `${this.BASE_URL}${PosterPath}`;
  }
}
