export interface Movie {

id: string;
title: string;
poster: string;
backdrop: string;
genre_ids: number[];
original_language: string;
original_title: string;
overview: string;
popularity: number;
release_date: string;
vote_avetage: number;
vote_count: number;
poster_path: string;
backdrop_path: string;
}

export interface MovieResponse {
 page: number;
 results: Movie[];
 total_results: number;
 total_pages: number;
 
}