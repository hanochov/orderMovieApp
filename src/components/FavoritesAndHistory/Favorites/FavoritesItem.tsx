import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../../../store/favorites-slice";
import { orderActions } from "../../../store/order-slice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Route, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tooltip from "@mui/material/Tooltip";
import React from "react";

const FavoritesItem: React.FC<{
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
}> = (props) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites.favorites);
  const toggleFavorite = async () => {
    dispatch(favoritesActions.toggleFavorites(props.id));
  };
  const setCurrentOrderID = () => {
    dispatch(orderActions.setCurrentOrderItemID(props.id));
  };

  return (
    <div>
      <Card sx={{ width: 250, height: 200, marginTop: 2, marginBottom: 2 }}>
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
              <Button
                size="small"
                variant="contained"
                color={"error"}
                onClick={toggleFavorite}
              >
                Remove as favorite
              </Button>
            </Col>
          </Row>
        </CardActions>
      </Card>
    </div>
  );
};

export default FavoritesItem;
