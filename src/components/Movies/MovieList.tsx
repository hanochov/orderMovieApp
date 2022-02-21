import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../store/movies-slice";
import MovieItem from "./MovieItem";
import Movie from "../../models/movie";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MovieList = () => {
  const baseURL =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=a99e5d5c60eb240021d889ec0c5572c3&language=en-US&page=";

  
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies.movies);
  const currentPage = useSelector((state: any) => state.movies.currenPage);
  const totalPages = useSelector((state: any) => state.movies.totalPages);
  const displayedPage = useSelector((state: any) => state.movies.displayedPage);
  const newMovies: Movie[] = [];


  const getTotalPages = (curPage: number) => {
    axios
      .get(`${baseURL} + ${curPage}`)
      .then((response) => {
        dispatch(moviesActions.setTotalPages(response.data.total_pages));
      })
      .then(function () {
        getMovies(2);
      });
  };


  const getMovies = (curPage: number) => {
    axios
      .get(`${baseURL} + ${curPage}`)
      .then((response) => {
        response.data.results.map((movie: Movie) =>
          newMovies.push(
            new Movie(
              movie.adult,
              movie.backdrop_path,
              movie.genre_ids,
              movie.id,
              movie.original_language,
              movie.original_title,
              movie.overview,
              movie.popularity,
              movie.poster_path,
              movie.release_date,
              movie.title,
              movie.video,
              movie.vote_average,
              movie.vote_count,
              false,
              response.data.page
            )
          )
        );
      })
      .then(function () {
        dispatch(moviesActions.setDefaultMovies(newMovies));
      });
  };

  useEffect(() => {
    getMovies(1);
    getTotalPages(1);
  }, []);


  useEffect(() => {
    getMovies(currentPage);
    if (currentPage < totalPages) {
      dispatch(moviesActions.setCurPage(currentPage + 1));
    }
  }, [currentPage, totalPages]);

  return (
    <div>
      <Row>
        {movies
          .filter((movie: Movie) => movie.currentPage === displayedPage)
          .map((movie: Movie) => (
            <Col key={movie.id}>
              <MovieItem
                key={movie.id}
                adult={movie.adult}
                backdrop_path={movie.poster_path}
                genre_ids={movie.genre_ids}
                id={movie.id}
                original_language={movie.original_language}
                original_title={movie.original_title}
                overview={movie.overview}
                popularity={movie.popularity}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                title={movie.title}
                video={movie.video}
                vote_average={movie.vote_average}
                vote_count={movie.vote_count}
                favorite={false}
                currentPage={movie.currentPage}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default MovieList;
