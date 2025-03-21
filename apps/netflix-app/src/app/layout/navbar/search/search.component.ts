import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../../features/movies/movies.service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent { 
  searchQuery = signal<string>('');
  private readonly _router = inject(Router);
  private readonly_moviesService = inject(MoviesService);

  





 }
