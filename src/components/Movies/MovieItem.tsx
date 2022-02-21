import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../../store/favorites-slice";
import { orderActions } from "../../store/order-slice";
import Movie from "../../models/movie";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Route, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Container from "react-bootstrap/Container";

const MovieItem: React.FC<{
  key: number;
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
}> = (props) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState<Boolean>(false);
  const movies = useSelector((state: any) => state.movies.movies);
  const favorites = useSelector((state: any) => state.favorites.favorites);
  const setCurrentOrderID = () => {
    dispatch(orderActions.setCurrentOrderItemID(props.id));
  };
  

  const toggleFavorite = async () => {
    dispatch(favoritesActions.toggleFavorites(props.id));
  };

  return (
    <Container>
      <Card sx={{ width: 250, height: 300, marginTop: 2, marginBottom: 2 }}>
        <CardMedia
          component="img"
          height="120"
          image={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          alt={props.title}
        />
        <CardContent>
          <Tooltip title={props.title}>
            <Typography
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
              }}
              gutterBottom
              variant="subtitle1"
              component="div"
            >
              {props.title}
            </Typography>
          </Tooltip>
          <Tooltip title={props.overview} placement="top">
            <Typography
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
              variant="body2"
              color="text.secondary"
            >
              {props.overview}
            </Typography>
          </Tooltip>
        </CardContent>
        <CardActions>
          <Row>
            <Col>
              <Link
                style={{ textDecoration: 0 }}
                to="order"
                onClick={setCurrentOrderID}
              >
                <Button size="small" variant="contained">
                  Order tickets
                </Button>
              </Link>
            </Col>
            <Col>
              {!favorites.includes(props.id) && (
                <Button
                  size="small"
                  variant="contained"
                  color={"success"}
                  onClick={toggleFavorite}
                >
                  Add as favorite
                </Button>
              )}
              {favorites.includes(props.id) && (
                <Button
                  size="small"
                  variant="contained"
                  color={"error"}
                  onClick={toggleFavorite}
                >
                  Remove as favorite
                </Button>
              )}
            </Col>
          </Row>
        </CardActions>
      </Card>
    </Container>
  );
};

export default MovieItem;
