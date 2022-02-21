class Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
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
  favorite: boolean;
  currentPage: number;

  constructor(
    m_adult: boolean,
    m_backdrop_path: string,
    m_genre_ids: number[],
    m_id: number,
    m_original_language: string,
    m_original_title: string,
    m_overview: string,
    m_popularity: number,
    m_poster_path: string,
    m_release_date: string,
    m_title: string,
    m_video: boolean,
    m_vote_average: number,
    m_vote_count: number,
    m_favorite:boolean,
    m_currentPage:number
  ) {
    this.adult = m_adult;
    this.backdrop_path = m_backdrop_path;
    this.genre_ids = m_genre_ids;
    this.id = m_id;
    this.original_language = m_original_language;
    this.original_title = m_original_title;
    this.overview = m_overview;
    this.popularity = m_popularity;
    this.poster_path = m_poster_path;
    this.release_date = m_release_date;
    this.title = m_title;
    this.video = m_video;
    this.vote_average = m_vote_average;
    this.vote_count = m_vote_count;
    this.favorite = m_favorite
    this.currentPage = m_currentPage
  }
}

export default Movie;
