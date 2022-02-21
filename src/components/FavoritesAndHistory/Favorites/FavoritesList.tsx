
import { useDispatch, useSelector } from "react-redux";
import Movie from "../../../models/movie";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import FavoritesItem from "./FavoritesItem";

const FavoritesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies.movies);
  const favorites = useSelector((state: any) => state.favorites.favorites);
  console.log(favorites)
  return (
    <div>
      {!favorites.length &&  <Alert severity="info">You have no favorite movies — check it out!</Alert>}
      {favorites.length && <Stack
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={1}
        sx={{ backgroundColor: "#E5F6FD", borderRadius: "50px"  }}
      >
        <h3>FAVORTIES MOVIES</h3>
      </Stack>}
      <Row>
        {movies
          .filter((movie: Movie) => favorites.includes(movie.id))
          .map((movie: Movie) => (
            <Col key={movie.id}>
              <FavoritesItem
                key={movie.id}
                adult={movie.adult}
                backdrop_path={movie.backdrop_path}
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
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default FavoritesList;
