import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MoviesService } from '../services/movies.service';

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  BASE_IMG_URL = environment.baseUrl;
  isFavorite: boolean = false;
  isBouncing = false;
  constructor(private movieService: MoviesService) {
    this.movieService.getData().subscribe((val) => {
      this.movies = val.results;
      console.log(this.movies);
    });
  }

  ngOnInit(): void {}

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.isBouncing = true;
    setTimeout(() => (this.isBouncing = false), 150);
  }
}
