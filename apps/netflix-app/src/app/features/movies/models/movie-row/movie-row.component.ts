import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Movie } from '../movies.interface';
import { ImageService } from '../../../../shared/image.service';

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

  private readonly _imageService = inject(ImageService);

  getImageUrl(PosterPath: string): string {
    return this._imageService.getImageUrl(PosterPath);
  }
}
