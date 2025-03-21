import { ChangeDetectionStrategy, Component, inject, linkedSignal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../../features/movies/movies.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Movie } from '../../../features/movies/models/movies.interface';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent { 
  searchQuery = signal<string>('');
  private readonly _router = inject(Router);
  private readonly _moviesService = inject(MoviesService);


  filteredMovies = rxResource({
    request: this.searchQuery,
    // request: () => this.searchQuery(),
    loader: () => this._moviesService.searchMovie(this.searchQuery()),
  })

  movies = linkedSignal(() => this.filteredMovies.value()?.results ?? ([] as Movie[]))
  // movies = computed(() => this.filteredMovies.value()?.results ?? ([] as Movie[]))



  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);

  }

  goToDetails(movieId: number): void {
    this._router.navigate(['/movie', movieId]);
    this._clearQuery();
  }

private _clearQuery(): void {
  this.searchQuery.set('');
 }
}