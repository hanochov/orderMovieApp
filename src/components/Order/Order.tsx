import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Order_O from "../../models/order";
import { orderActions } from "../../store/order-slice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import jBox from "jbox";
import "jbox/dist/jBox.all.css";
import { useHistory } from "react-router-dom";


const Order = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector((state: any) => state.movies.movies);
  const currentOrder = useSelector(
    (state: any) => state.order.currentOrderItemID
  );
  const [quantity, setQuantity] = useState<number>(2);

  const setDetails = () => {
    history.push("/movies");
  };

  const orderMovie = () => {
    insertMovieToRederedList();
    new jBox("Notice", {
      content: "Thank you for ordering from us",
      color: "green",
      autoClose: 10000,
      animation: { open: "tada", close: "flip" },
      position: { x: "center", y: "center" },
      showCountdown: true,
      onClose: setDetails,
    });
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setQuantity(newValue);
      console.log(newValue);
    }
  };
  const insertMovieToRederedList = () => {
    movies
      .filter((movie: Order_O) => movie.id === currentOrder)
      .map((movie: Order_O) =>
        dispatch(
          orderActions.setDefaultMovies({
            key: movie.id,
            adult: movie.adult,
            backdrop_path: movie.backdrop_path,
            genre_ids: movie.genre_ids,
            id: movie.id,
            original_language: movie.original_language,
            original_title: movie.original_title,
            overview: movie.overview,
            popularity: movie.popularity,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            title: movie.title,
            video: movie.video,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
            quantity: quantity,
            orderDate:new Date().toDateString()
          })
        )
      );
  };

  return (
    <div>
      <Row>
        <Col>
          {movies
            .filter((movie: Order_O) => movie.id === currentOrder)
            .map((movie: Order_O) => (
              <Card key={movie.id} sx={{ marginTop: 2, marginBottom: 2 }}>
                <Row>
                  <CardMedia
                    component="img"
                    height="280"
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Row>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    marginBottom={2}
                  >
                   <h2>{movie.title}</h2> 
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    marginBottom={2}
                  >
                    <h3>Overview:</h3><p>{movie.overview}</p>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    marginBottom={2}
                  >
                    <h5>Release date: {movie.release_date}</h5>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    marginBottom={2}
                  >
                    <h2>18+: {movie.adult && "Yes"} {!movie.adult && "No"}</h2>
                  </Typography>
                  <Row>
                    <Col></Col>
                    <Col>
                      <Box width={300}>
                        <Slider
                          defaultValue={2}
                          aria-label="Default"
                          valueLabelDisplay="on"
                          min={0}
                          max={10}
                          onChange={handleChange}
                        />
                      </Box>
                    </Col>
                  </Row>
                  <Row>
                    <Col></Col>
                    <Col >
                      {" "}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={orderMovie}
                        disabled={quantity===0}
                        sx={{width:300}}
                      >
                        Select the quantity of tickets and click here to order
                      </Button>
                    </Col>
                  </Row>
                </CardContent>
              </Card>
            ))}
        </Col>
      </Row>
    </div>
  );
};

export default Order;
